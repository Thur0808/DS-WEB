<?php
function validarCPF($cpf) {

    // Remove tudo que não for número
    $cpf = preg_replace('/\D/', '', $cpf);

    // Verifica se tem 11 dígitos
    if (strlen($cpf) != 11) return false;

    // Impede números iguais (11111111111, 00000000000...)
    if (preg_match('/^(\d)\1{10}$/', $cpf)) return false;

    // Primeiro dígito
    $soma = 0;
    for ($i = 0; $i < 9; $i++) {
        $soma += $cpf[$i] * (10 - $i);
    }
    $digito1 = ($soma * 10) % 11;
    if ($digito1 == 10) $digito1 = 0;

    if ($digito1 != $cpf[9]) return false;

    // Segundo dígito
    $soma = 0;
    for ($i = 0; $i < 10; $i++) {
        $soma += $cpf[$i] * (11 - $i);
    }
    $digito2 = ($soma * 10) % 11;
    if ($digito2 == 10) $digito2 = 0;

    if ($digito2 != $cpf[10]) return false;

    return true;
}

$resultado = null;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $resultado = validarCPF($_POST["cpf"]);
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Validador de CPF</title>
</head>
<body>

<h2>Digite seu CPF</h2>

<form method="POST">
    <input type="text" name="cpf" required>
    <button type="submit">Validar</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h3>CPF válido? " . ($resultado ? " Sim" : " Não") . "</h3>";
}
?>

</body>
</html>

