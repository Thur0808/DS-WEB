<?php

class Veiculo {

    public $marca;
    public $modelo;
    private $velocidade;

    public function setVelocidade($velocidade){
        $this->velocidade = $velocidade;
    }

    public function getVelocidade(){
        return $this->velocidade;
    }
}
class Carro extends Veiculo {
    public function acelerar(){
        // Carro acelera de 10 em 10
        $novaVelocidade = $this->getVelocidade() + 220;
        $this->setVelocidade($novaVelocidade);
    }
}
class Moto extends Veiculo {
    public function acelerar(){
        // Moto acelera de 20 em 20
        $novaVelocidade = $this->getVelocidade() + 150;
        $this->setVelocidade($novaVelocidade);
    }
}


// Instanciando

$carro = new Carro();
$carro->marca = "Volkswagem";
$carro->modelo = "Gol Quadrado";
$carro->setVelocidade(0);

$moto = new Moto();
$moto->marca = "BMW";
$moto->modelo = "GS 1200";
$moto->setVelocidade(0);


// Exibindo comportamentos

echo "Carro: {$carro->marca} {$carro->modelo}<br>";
$carro->acelerar();
echo "Velocidade: " . $carro->getVelocidade() . " km/h<br>";

echo "------------------------<br>";

echo "Moto: {$moto->marca} {$moto->modelo}<br>";
$moto->acelerar();
echo "Velocidade: " . $moto->getVelocidade() . " km/h<br>";

?>