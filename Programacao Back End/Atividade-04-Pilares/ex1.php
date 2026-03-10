<?php

class Pessoa
{
    public $nome;
    public $idade;
    public $salario;

    public function calcularBonus()
    {
        return 0;
    }

    public function verDados()
    {
        echo "Nome: " . $this->nome . "<br/>";
        echo "Classe: " . get_class($this) . "<br/>";
        echo "Salário com bônus: R$ " . ($this->salario + $this->calcularBonus()) . "<br/><br/>";
    }
}

class Funcionario extends Pessoa
{
    public function calcularBonus()
    {
        return 0; // Funcionário comum não tem bônus
    }
}

class Desenvolvedor extends Funcionario
{
    public function calcularBonus()
    {
        return $this->salario * 0.10; // 10% de bônus
    }
}

class Gerente extends Funcionario
{
    public function calcularBonus()
    {
        return $this->salario * 0.20; // 20% de bônus
    }
}

// Instanciando os objetos e atribuindo valores no final
$funcionario = new Funcionario();
$funcionario->nome = "Bruno";
$funcionario->salario = 1621;

$gerente = new Gerente();
$gerente->nome = "Enzo";
$gerente->salario = 5000;

$dev = new Desenvolvedor();
$dev->nome = "Arthur";
$dev->salario = 3000;

// Exibe os dados
$funcionario->verDados();
$gerente->verDados();
$dev->verDados();

?>