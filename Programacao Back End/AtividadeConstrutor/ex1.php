<?php
class Dono {
public string $nome;
public string $telefone;
public function __construct(string $nome, string $telefone) {
$this->nome = $nome;
$this->telefone = $telefone;
}
}
class Animal {
public string $nome;
public string $especie;
public Dono $Dono; // objeto dentro de objeto

public function __construct(string $nome, $especie, Dono $dono) {
$this->nome = $nome;
$this->Dono = $dono;
$this->especie = $especie;
}


public function exibir() {
        echo $this->nome . " | " . $this->especie . "<br>";
        echo "Dono: " . $this->Dono->nome . " | Tel: " . $this->Dono->telefone;
    }
}



$dono = new Dono("Arthur", "(15) 99999999");

$animal = new Animal("Cachorro", "Thor", $dono);


$animal->exibir();


