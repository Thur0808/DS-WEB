<?php
class Documento {
    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }
}

class CPF extends Documento {
    public function validar() {
        $cpf = $this->getNumero();

        if (!$cpf) {
            return false;
        }

        // Remove caracteres não numéricos
        $cpf = preg_replace('/\D/', '', $cpf);

        // CPF deve ter 11 dígitos
        if (strlen($cpf) != 11) {
            return false;
        }

        // Não pode ter todos os dígitos iguais
        if (preg_match('/^(\d)\1{10}$/', $cpf)) {
            return false;
        }

        // Validação do primeiro dígito verificador
        $soma = 0;
        for ($i = 0; $i < 9; $i++) {
            $soma += intval($cpf[$i]) * (10 - $i);
        }
        $digito1 = ($soma * 10) % 11;
        if ($digito1 == 10) $digito1 = 0;
        if ($digito1 != intval($cpf[9])) {
            return false;
        }

        // Validação do segundo dígito verificador
        $soma = 0;
        for ($i = 0; $i < 10; $i++) {
            $soma += intval($cpf[$i]) * (11 - $i);
        }
        $digito2 = ($soma * 10) % 11;
        if ($digito2 == 10) $digito2 = 0;
        if ($digito2 != intval($cpf[10])) {
            return false;
        }

        return true;
    }
}

// Testando
$meuCPF = new CPF();
$meuCPF->setNumero("123.456.789-09"); // inválido
echo "CPF válido? " . ($meuCPF->validar() ? "Sim" : "Não") . "\n";
