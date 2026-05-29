// C++ code
//
int led = 13;
 
char teclado;

void setup()
{
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}


void loop()
{
  if(Serial.available()>0){
    teclado = Serial.read();
    {
    if (teclado=='l' or teclado == 'L')
      digitalWrite(led, HIGH);
    }
    if (teclado=='d' or teclado== 'D'){
      digitalWrite(led, LOW);
    }    
  }
}