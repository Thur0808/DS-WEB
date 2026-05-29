#include <Servo.h>

#define pinServo 9
#define pinLedVerde 6
#define pinLedAmarelo 5
#define pinLedVermelho 7

Servo servo1;
int grau = 0;

void setup() {
  servo1.attach(pinServo);
 
  // Configura os pinos dos três LEDs como saídas
  pinMode(pinLedVerde, OUTPUT);
  pinMode(pinLedAmarelo, OUTPUT);
  pinMode(pinLedVermelho, OUTPUT);
 
  Serial.begin(9600);
 
  // IMPORTANTE: Define um tempo limite baixo para a leitura serial.
  // Isso impede que o Arduino fique travado esperando mais dados do PHP.
  Serial.setTimeout(50);
 
  // Inicia com a cancela fechada (0 graus) e apenas o LED vermelho aceso
  servo1.write(0);
  digitalWrite(pinLedVermelho, HIGH);
  digitalWrite(pinLedAmarelo, LOW);
  digitalWrite(pinLedVerde, LOW);
  delay(1000);

  // --- INTERFACE DO MONITOR SERIAL ---
  Serial.println("=========================================");
  Serial.println("       SISTEMA DE CONTROLE DE CANCELA     ");
  Serial.println("=========================================");
  Serial.println("Instrucoes:");
  Serial.println("Digite o angulo desejado (0 a 180).");
  Serial.println(" - 0 graus:           Cancela FECHADA (LED Vermelho)");
  Serial.println(" - Entre 1 e 89 graus: Cancela PARCIAL  (LED Amarelo)");
  Serial.println(" - 90 graus ou mais:  Cancela ABERTA   (LED Verde)");
  Serial.println("-----------------------------------------");
  Serial.println("Aguardando comando...");
  Serial.println("");
}

void loop() {
  // Verifica se há algum dado sendo enviado pela Porta Serial (seja do PC ou do PHP)
  if (Serial.available() > 0) {
   
    // Lê o número inteiro enviado
    int entrada = Serial.parseInt();
   
    // Pequeno atraso para garantir a leitura e limpa resíduos do buffer
    delay(10);
    while(Serial.available() > 0) {
      Serial.read();
    }

    // Verifica se o valor digitado está dentro do limite do servo (0 a 180)
    if (entrada >= 0 && entrada <= 180) {
      grau = entrada;
      servo1.write(grau); // Move o servo para o ângulo recebido
     
      // Feedback na Serial
      Serial.print(">>> Cancela ajustada para: ");
      Serial.print(grau);
      Serial.println(" graus.");

      // --- LÓGICA DOS LEDS ---
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
     
    } else {
      Serial.println("ERRO: Valor invalido! Use numeros entre 0 e 180.");
      Serial.println("-----------------------------------------");
    }
  }
}