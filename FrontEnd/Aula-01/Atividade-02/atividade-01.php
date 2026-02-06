<?php

class Relógio {
    public $cor; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $marca; //Atributo
    public $tipo; //Atributo

    public function usar() { //Método
        return "Vou usar o relógio da marca".$this->marca;
    }

        public function carregar() { //Método
        return "O relógio de cor está carregando".$this->cor;
    }

        public function ligar() { //Método
        return "O relógio do modelo está ligando".$this->modelo;
    }
}
?>




<?php

class Porta {
    public $cor; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $macaneta; //Atributo
    public $tipo; //Atributo

    public function abrir() { //Método
        return "Vou abrir a porta de cor ".$this->cor;
    }

    public function fechar() { //Método
        return "Vou fechar a porta de tamanho ".$this->tamanho;
    }

    public function trancar() { //Método
    return "Vou trancar a porta do tipo ".$this->tipo;
    }
}
?>


<?php

class Armário {
    public $cor; //Atributo
    public $modelo; //Atributo
    public $tamanho; //Atributo
    public $trancar; //Atributo
    public $tipo; //Atributo

    public function abrir() { //Método
        return "Vou abrir o armario de cor ".$this->cor;
    }

        public function fechar() { //Método
        return "Vou fechar o armário de tamanho ".$this->tamanho;
    }

        public function guardar() { //Método
        return "Vou trancar o armário depois de guardar algo nele ".$this->trancar;
    }
}
?>





<?php

class Bolsa {
    public $cor; //Atributo
    public $material; //Atributo
    public $tamanho; //Atributo
    public $marca; //Atributo
    public $tipo; //Atributo

    public function usar() { //Método
        return "Vou usar a bolsa da marca ".$this->marca;
    }

        public function carregar() { //Método
        return "Essa bolsa que estou carregando é bem tamanho ".$this->tamanho;
    }

        public function guardar() { //Método
        return "Estou guardando um material na minha bolsa da marca ".$this->marca;
    }
}
?>






<?php

class Extensão {
    public $cor; //Atributo
    public $voltagem; //Atributo
    public $tamanho; //Atributo
    public $marca; //Atributo
    public $tipo; //Atributo

    public function desligar() { //Método
        return "Vou desligar a extensão de cor ".$this->cor;
    }

        public function carregar() { //Método
        return "Vou carregar com voltagem ".$this->voltagem;
    }

        public function ligar() { //Método
        return "Vou ligar a extensão de tamanho ".$this->tamanho;
    }
}
?>