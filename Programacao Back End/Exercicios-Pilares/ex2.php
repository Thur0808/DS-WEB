<?php
abstract class Animal
{
    public function falar()
    {

        return "Som";
    }
    public function mover()
    {
        return "Anda";
    }
}
class Sapo extends Animal
{
    public function falar()
    {
        return "Nada";
    }
}
class Tartaruga extends Animal
{
    public function falar()
    {
        return "Corre";
    }
}
class Cavalo extends Animal
{
    public function falar()
    {
        return "Corre";
    }
    public function mover()
    {
        return "Galopa e " . parent::mover();
    }
}
$nãoLavaoPé = new Sapo();


echo $nãoLavaoPé->falar() . "<br/>";
echo $nãoLavaoPé->mover() . "<br/>";
echo "-------------------------<br/>";
$Flash = new Tartaruga();
echo $Flash->falar() . "<br/>";
echo $Flash->mover() . "<br/>";
echo "-------------------------<br/>";
$PéDePano = new Cavalo();
echo $PéDePano->falar() . "<br/>";
echo $PéDePano->mover() . "<br/>";
