// Pinos dos botões
const int pinoBotaoLiga = 2;
const int pinoBotaoDesliga = 3;

void setup() {
  // Inicia a comunicação serial a 9600 bps
  Serial.begin(9600);
 
  // Configura os pinos como entrada com resistor pull-up interno
  // Isso evita que o pino fique "flutuando" (leitura errada)
  pinMode(pinoBotaoLiga, INPUT_PULLUP);
  pinMode(pinoBotaoDesliga, INPUT_PULLUP);
}

void loop() {
  // Se pressionar o botão Liga (leitura LOW por causa do Pull-up)
  if (digitalRead(pinoBotaoLiga) == LOW) {
    Serial.write('1'); // Envia o caractere '1'
    delay(200);        // Debounce simples
  }

  // Se pressionar o botão Desliga
  if (digitalRead(pinoBotaoDesliga) == LOW) {
    Serial.write('0'); // Envia o caractere '0'
    delay(200);        // Debounce simples
  }
}