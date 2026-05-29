#include <Servo.h>
#define pinServo 9

Servo servo1;
int grau = 0;

void setup() {
  servo1.attach(pinServo);
  Serial.begin(9600);
  servo1.write(0); // Inicia com a válvula fechada (0 graus)
  delay(1000);

  // --- INTERFACE DO MONITOR SERIAL ---
  Serial.println("=========================================");
  Serial.println("    SISTEMA DE CONTROLE DE PRESSAO DE AGUA");
  Serial.println("=========================================");
  Serial.println("Instrucoes:");
  Serial.println("Digite o angulo desejado (0 a 180).");
  Serial.println(" - 0   graus: Valvula totalmente FECHADA");
  Serial.println(" - 180 graus: Valvula totalmente ABERTA");
  Serial.println("-----------------------------------------");
  Serial.println("Aguardando comando...");
  Serial.println("");
}

void loop() {
  // Verifica se há algum dado sendo enviado pelo Monitor Serial
  if (Serial.available() > 0) {
   
    // Lê o número inteiro que o usuário digitou
    int entrada = Serial.parseInt();
   
    // Pequeno atraso para o Arduino ler tudo e limpa qualquer "Enter" acidental do buffer
    delay(50);
    while(Serial.available() > 0) {
      Serial.read();
    }

    // Verifica se o valor digitado está dentro do limite seguro do servo (0 a 180)
    if (entrada >= 0 && entrada <= 180) {
      grau = entrada;
      servo1.write(grau); // Move o servo para o ângulo digitado
     
      // Feedback na tela do Monitor Serial
      Serial.print(">>> Valvula ajustada para: ");
      Serial.print(grau);
      Serial.println(" graus.");
     
    } else {
      // Caso o usuário digite 200, 300, ou um valor negativo
      Serial.println("ERRO: Valor invalido! Por favor, use apenas numeros entre 0 e 180.");
      Serial.println("-----------------------------------------");
    }
  }
}

