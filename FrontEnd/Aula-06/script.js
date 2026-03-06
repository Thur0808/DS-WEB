const form = document.getElementById("formulario");

form.addEventListener("submit", function(event){

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const erro = document.getElementById("erro");

  erro.textContent = "";

  // validação do nome
  if(nome.length < 3){
    event.preventDefault();
    erro.textContent = "Nome precisa ter pelo menos 3 caracteres.";
    return;
  }
  
  const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;

if(!regexNome.test(nome)){
  event.preventDefault();
  erro.textContent = "O nome não pode conter números.";
  return;
}

  // validação do email
  const regexEmail = /\S+@\S+\.\S+/;

  if(!regexEmail.test(email)){
    event.preventDefault();
    erro.textContent = "Digite um email válido.";
    return;
  }

  // validação da senha
  if(senha.length < 5){
    event.preventDefault();
    erro.textContent = "A senha deve ter pelo menos 5 caracteres.";
    return;
  }

const regexTelefone = /^[0-9]+$/;

if (!regexTelefone.test(telefone)) {
  event.preventDefault(); 
  erro.textContent = "O telefone deve conter apenas números.";
  return;
}

  alert("Formulário enviado com sucesso!");

});