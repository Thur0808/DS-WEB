#include <DHT.h>
#include <Servo.h>

// --- CONFIGURAÇÃO DOS PINOS ---
#define DHTPIN 2          // Verifique se o pino de sinal do DHT11 está no pino 2!
#define DHTTYPE DHT11    

#define pinServo 9
#define pinLedAmarelo 5  
#define pinLedVerde 6
#define pinLedVermelho 7     

DHT dht(DHTPIN, DHTTYPE);
Servo servo1;

void setup() {
  Serial.begin(9600);
  dht.begin();
 
  servo1.attach(pinServo);
  pinMode(pinLedVerde, OUTPUT);
  pinMode(pinLedAmarelo, OUTPUT);
  pinMode(pinLedVermelho, OUTPUT);   
 
  // Estado inicial
  servo1.write(90);
  digitalWrite(pinLedVerde, HIGH);
  digitalWrite(pinLedAmarelo, LOW);
  digitalWrite(pinLedVermelho, LOW);
 
  Serial.println("--- Modo de Leitura Direta (DHT11) Ativado ---");
}

void loop() {
  // O DHT11 precisa de pelo menos 2 segundos entre as leituras para não travar
  delay(2000);

  // 1. LÊ A TEMPERATURA REAL E DIRETA DO SENSOR
  float temperatura = dht.readTemperature();

  // Se a leitura falhar (fio solto ou pino errado), avisa no monitor em vez de chutar 115°C
  if (isnan(temperatura)) {
    Serial.println("Erro ao ler o sensor DHT11! Verifique os fios.");
    return; // Pula o resto do código até o sensor responder
  }

  // Exibe a temperatura real e exata no Monitor Serial
  Serial.print("Temperatura Atual: ");
  Serial.print(temperatura);
  Serial.println(" C");

  // --- LÓGICA DAS FAIXAS FIXAS SOLICITADAS ---

  // FAIXA VERDE: Até 16°C -> Cancela Aberta (90°)
  if (temperatura <= 27.0) {
    servo1.write(90);
    digitalWrite(pinLedVerde, HIGH);
    digitalWrite(pinLedAmarelo, LOW);
    digitalWrite(pinLedVermelho, LOW);
  }
  // FAIXA AMARELA: De 17°C até 23°C -> Cancela em Alerta (45°)
  else if (temperatura > 27.0 && temperatura <= 29.0) {
    servo1.write(45);
    digitalWrite(pinLedVerde, LOW);
    digitalWrite(pinLedAmarelo, HIGH);
    digitalWrite(pinLedVermelho, LOW);
  }
  // FAIXA VERMELHA: Acima de 23°C -> Cancela Fechada (0°)
  else {
    servo1.write(0);
    digitalWrite(pinLedVerde, LOW);
    digitalWrite(pinLedAmarelo, LOW);
    digitalWrite(pinLedVermelho, HIGH);
  }
}