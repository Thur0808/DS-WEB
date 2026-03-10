<?php
class Fabricante {
    public $nome;
    public $paisOrigem;

    public function __construct($nome, $paisOrigem) {
        $this->nome = $nome;
        $this->paisOrigem = $paisOrigem;
    }
}

class Motor {
    public $potencia;
    public $combustivel;

    public function __construct($potencia, $combustivel) {
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }
}

class Carro {
    public $modelo;
    public $ano;
    public $fabricante; // objeto do tipo Fabricante
    public $motor;      // objeto do tipo Motor

    public function __construct($modelo, $ano, Fabricante $fabricante, Motor $motor) {
        $this->modelo = $modelo;
        $this->ano = $ano;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }

    public function exibirFicha() {
        echo $this->modelo . " | " . $this->ano . "<br>";
        echo "Fabricante: " . $this->fabricante->nome . " | Origem: " . $this->fabricante->paisOrigem . "<br>";
        echo "Motor: " . $this->motor->potencia . " | Combustível: " . $this->motor->combustivel;
    }
}


// Criando os objetos
$fabricante = new Fabricante("Mitsubishi", "Japão");
$motor = new Motor("210cv", "Gasolina");

$carro = new Carro("Eclipse", 1995, $fabricante, $motor);

// Exibindo
$carro->exibirFicha();