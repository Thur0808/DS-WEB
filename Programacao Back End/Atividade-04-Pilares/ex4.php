<?php
abstract class Produto
{
    public $nome = "Produto";
    public $preco = 100;
    public $estoque = 10;

    // Agora é abstrato (obrigatório nas subclasses)
    abstract public function calcularDesconto();

    public function verDados()
    {
        $desconto = $this->calcularDesconto();

        // Regra: estoque menor que 5 = +10% extra
        if ($this->estoque < 5) {
            $desconto += $this->preco * 0.10;
        }

        $precoFinal = $this->preco - $desconto;

        echo get_class($this) . " - Preço final: R$ ";
        echo $precoFinal;
        echo "<br/>";
    }
}

class Eletronico extends Produto
{
    // 10% de desconto
    public function calcularDesconto()
    {
        return $this->preco * 0.10;
    }
}

class Roupa extends Produto
{
    // 20% de desconto
    public function calcularDesconto()
    {
        return $this->preco * 0.20;
    }
}


// Teste
$eletronico = new Eletronico();
$eletronico->preco = 5000;
$eletronico->estoque = 10;

$roupa = new Roupa();
$roupa->preco = 500;
$roupa->estoque = 3;

$eletronico->verDados();
$roupa->verDados();

?>
