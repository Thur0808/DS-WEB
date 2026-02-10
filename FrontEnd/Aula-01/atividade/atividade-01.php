<?php

class Relógio {
    public $cor; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $marca; //Atributo
    public $tipo; //Atributo

    public function usar() { //Método
        return "<br>Vou usar o relógio da marca".$this->marca;
    }

        public function carregar() { //Método
        return "<br>Está carregando o relógio de cor".$this->cor;
    }

        public function ligar() { //Método
        return "<br>Está ligando o relógio do modelo".$this->modelo;
    }
}

$AppleWatch = new Relógio(); //Inicio do objeto
$AppleWatch->marca = " Apple"; //atribuindo valor a um atributo
echo $AppleWatch->usar(); //Exibindo um atributo
echo "<br>";


$AppleWatch = new Relógio(); //Inicio do objeto
$AppleWatch->cor = " Preto"; //atribuindo valor a um atributo
echo $AppleWatch->carregar(); //Exibindo um atributo
echo "<br>";


$AppleWatch = new Relógio(); //Inicio do objeto
$AppleWatch->modelo = " Apple Watch 48"; //atribuindo valor a um atributo
echo $AppleWatch->ligar(); //Exibindo um atributo
echo "<br>";

?>




<?php

class Porta {
    public $cor; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $macaneta; //Atributo
    public $material; //Atributo

    public function abrir() { //Método
        return "<br>Vou abrir a porta de cor ".$this->cor;
    }

    public function fechar() { //Método
        return "<br>Vou fechar a porta de tamanho ".$this->tamanho;
    }

    public function trancar() { //Método
    return "<br>Vou trancar a porta feita de ".$this->material;
    }
}

$Camarão = new Porta(); //Inicio do objeto
$Camarão->cor = "Preto"; //atribuindo valor a um atributo
echo $Camarão->abrir(); //Exibindo um atributo
echo "<br>";


$Camarão = new Porta(); //Inicio do objeto
$Camarão->tamanho = "2 Metros"; //atribuindo valor a um atributo
echo $Camarão->fechar(); //Exibindo um atributo
echo "<br>";


$Camarão = new Porta(); //Inicio do objeto
$Camarão->material = "Madeira"; //atribuindo valor a um atributo
echo $Camarão->trancar(); //Exibindo um atributo
echo "<br>";


?>


<?php

class Armário {
    public $cor; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $trancar; //Atributo
    public $tipo; //Atributo

    public function abrir() { //Método
        return "<br>Vou abrir o armario de cor ".$this->cor;
    }

        public function fechar() { //Método
        return "<br>Vou fechar o armário de tamanho ".$this->tamanho;
    }

        public function guardar() { //Método
        return "<br>Vou trancar o armário depois de guardar algo nele ".$this->trancar;
    }
}

$Madeira = new Armário(); //Inicio do objeto
$Madeira->cor = "Preto"; //atribuindo valor a um atributo
echo $Madeira->abrir(); //Exibindo um atributo
echo "<br>";


$Madeira = new Armário(); //Inicio do objeto
$Madeira->tamanho = "1 Metro"; //atribuindo valor a um atributo
echo $Madeira->fechar(); //Exibindo um atributo
echo "<br>";


$Madeira = new Armário(); //Inicio do objeto
$Madeira->material = "Caixa"; //atribuindo valor a um atributo
echo $Madeira->fechar(); //Exibindo um atributo
echo "<br>";

?>





<?php

class Bolsa {
    public $cor; //Atributo
    public $material; //Atributo
    public $peso; //Atributo
    public $marca; //Atributo
    public $tipo; //Atributo

    public function usar() { //Método
        return "<br>Vou usar a bolsa da cor ".$this->cor;
    }

        public function carregar() { //Método
        return "<br>Essa bolsa que estou carregando está bem ".$this->peso;
    }

        public function guardar() { //Método
        return "<br>Estou guardando um material na minha bolsa da marca ".$this->marca;
    }
}

$Escola = new Bolsa(); //Inicio do objeto
$Escola->cor = "Preto"; //atribuindo valor a um atributo
echo $Escola->usar(); //Exibindo um atributo
echo "<br>";


$Escola = new Bolsa(); //Inicio do objeto
$Escola->peso = "pesado"; //atribuindo valor a um atributo
echo $Escola->guardar(); //Exibindo um atributo
echo "<br>";


$Escola = new Bolsa(); //Inicio do objeto
$Escola->marca = "Nike"; //atribuindo valor a um atributo
echo $Escola->guardar(); //Exibindo um atributo
echo "<br>";

?>







<?php

class Extensão {
    public $cor; //Atributo
    public $voltagem; //Atributo
    public $tamanho; //Atributo
    public $marca; //Atributo
    public $tipo; //Atributo

    public function desligar() { //Método
        return "<br>Vou desligar a extensão de cor ".$this->cor;
    }

        public function carregar() { //Método
        return "<br>Vou carregar com voltagem ".$this->voltagem;
    }

        public function ligar() { //Método
        return "<br>Vou ligar a extensão de tamanho ".$this->tamanho;
    }
}

$Régua = new Extensão(); //Inicio do objeto
$Régua->cor = "Preto"; //atribuindo valor a um atributo
echo $Régua->desligar(); //Exibindo um atributo
echo "<br>";


$Régua = new Extensão(); //Inicio do objeto
$Régua->voltagem = "110"; //atribuindo valor a um atributo
echo $Régua->carregar(); //Exibindo um atributo
echo "<br>";


$Régua = new Extensão(); //Inicio do objeto
$Régua->ligar = "12 Portas"; //atribuindo valor a um atributo
echo $Régua->ligar(); //Exibindo um atributo
echo "<br>";

?>