<?php

class Pessoa {
    public $nome; //Atributo

    public function falar() { //Método
    
        return "O meu nome é ".$this->nome;
    }
}

$Arthur = new Pessoa();
$Arthur->nome = "Arthur Amorim";
echo $Arthur->falar();
?>