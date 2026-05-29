#include <Servo.h>

#define pinServo 9
#define pinLedVerde 6
#define pinLedAmarelo 5
#define pinLedVermelho 7
#define pinMicrofone 2 // Pino OUT do microfone conectado no pino Digital 2

Servo servo1;
int grau = 0;
int estadoCancela = 0; // Controla os 3 estados (0 = Fechada, 1 = Parcial, 2 = Aberta)

// Variáveis de controle para evitar que uma única palma mude vários estados de uma vez (Debounce)
unsigned long tempoUltimaPalma = 0;
const int intervaloDebounce = 400; // Tempo de espera em milissegundos entre comandos

void setup() {
  servo1.attach(pinServo);
  
  // Configura os pinos dos três LEDs como saídas
  pinMode(pinLedVerde, OUTPUT);
  pinMode(pinLedAmarelo, OUTPUT);
  pinMode(pinLedVermelho, OUTPUT);
  
  // Configura o pino do microfone como entrada
  pinMode(pinMicrofone, INPUT);
  
  Serial.begin(9600);
  
  // Inicia com a cancela fechada (0 graus) e apenas o LED vermelho aceso
  servo1.write(0);
  digitalWrite(pinLedVermelho, HIGH);
  digitalWrite(pinLedAmarelo, LOW);
  digitalWrite(pinLedVerde, LOW);
  delay(1000);

  // --- INTERFACE DO MONITOR SERIAL MANTIDA ---
  Serial.println("=========================================");
  Serial.println("     SISTEMA DE CANCELA POR PALMAS       ");
  Serial.println("=========================================");
  Serial.println("Instrucoes:");
  Serial.println("Bata uma palma para alternar entre os estados:");
  Serial.println(" - 0 graus:       Cancela FECHADA (LED Vermelho)");
  Serial.println(" - 45 graus:      Cancela PARCIAL (LED Amarelo)");
  Serial.println(" - 90 graus:      Cancela ABERTA  (LED Verde)");
  Serial.println("-----------------------------------------");
  Serial.println("Aguardando palma ou som alto...");
  Serial.println("");
}

void loop() {
  // ATENÇÃO: A maioria desses módulos azuis fica em HIGH em silêncio e muda para LOW quando detecta som.
  // Se o seu sensor funcionar ao contrário, mude de LOW para HIGH na linha abaixo.
  int somDetectado = digitalRead(pinMicrofone);

  // Verifica se o som foi detectado e se respeita o tempo de segurança (debounce)
  if (somDetectado == LOW && (millis() - tempoUltimaPalma > intervaloDebounce)) {
    tempoUltimaPalma = millis(); // Salva o momento do som atual
    
    // Avança o estado da cancela (0 -> 1 -> 2 -> volta para 0)
    estadoCancela++;
    if (estadoCancela > 2) {
      estadoCancela = 0;
    }

    // Define o ângulo baseado no estado atual
    if (estadoCancela == 0) {
      grau = 0;
    } else if (estadoCancela == 1) {
      grau = 45; // Valor intermediário entre 1 e 89
    } else if (estadoCancela == 2) {
      grau = 90; // Valor de abertura
    }

    // Move o servo para o ângulo definido pelo estado
    servo1.write(grau); 
    
    // Feedback na Serial
    Serial.print(">>> Som detectado! Mudando para: ");
    Serial.print(grau);
    Serial.println(" graus.");

    // --- SUA LÓGICA DE LEDS ORIGINAL EXATAMENTE IGUAL ---
    if (grau == 0) {
      digitalWrite(pinLedVermelho, HIGH);
      digitalWrite(pinLedAmarelo, LOW);
      digitalWrite(pinLedVerde, LOW);
      Serial.println("[STATUS] Cancela Fechada! Aguarde.");
    }
    else if (grau >= 90) {
      digitalWrite(pinLedVermelho, LOW);
      digitalWrite(pinLedAmarelo, LOW);
      digitalWrite(pinLedVerde, HIGH);
      Serial.println("[STATUS] Cancela Aberta! Passagem Liberada.");
    }
    else {
      digitalWrite(pinLedVermelho, LOW);
      digitalWrite(pinLedAmarelo, HIGH);
      digitalWrite(pinLedVerde, LOW);
      Serial.println("[STATUS] Cancela Parcialmente Aberta!");
    }
    Serial.println("-----------------------------------------");
  }
}