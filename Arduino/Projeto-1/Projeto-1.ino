int botao1 = 7;
int botao2 = 5;
int led1 = 6;

void setup()
{
  pinMode(led1, OUTPUT);
  pinMode(botao1, INPUT_PULLUP);
  pinMode(botao2, INPUT_PULLUP);
}

void loop()
{
  if (digitalRead(botao1) == LOW) {
    digitalWrite(led1, HIGH);
  }

  if (digitalRead(botao2) == LOW) {
    digitalWrite(led1, LOW);
  }
}