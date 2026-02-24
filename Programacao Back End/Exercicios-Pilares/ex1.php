<?php

class Pessoa
{
    public $nome = "Arthur";
    public $idade = 17;

    public function calcularBonus()
    {
        return 0;
    }

    public function verDados()
    {
        echo get_class($this) . " - Salário: R$ ";
        echo $this->salario + $this->calcularBonus();
        echo "<br/>";
    }
}

class Funcionario extends Pessoa
{
    public $salario = 1621;
}

class Desenvolvedor extends Funcionario
{
    public function calcularBonus()
    {
        return $this->salario * 0.10;
    }
}

class Gerente extends Funcionario
{
    public function calcularBonus()
    {
        return $this->salario * 0.20;
    }
}


// Teste
$funcionario = new Funcionario();
$gerente = new Gerente();
$dev = new Desenvolvedor();

$funcionario->verDados();
$gerente->verDados();
$dev->verDados();
