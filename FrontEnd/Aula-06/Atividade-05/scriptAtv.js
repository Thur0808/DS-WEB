const form = document.getElementById("formulario");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirma-senha");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const dataNascimento = document.getElementById("data-nascimento");
    const valor = document.getElementById("valor");
    const url = document.getElementById("url");
    const cartao = document.getElementById("cartao");

    const erroNome = document.getElementById("erro-nome");
    const erroEmail = document.getElementById("erro-email");
    const erroSenha = document.getElementById("erro-senha");
    const erroConfirmarSenha = document.getElementById("erro-confirma-senha");
    const erroCpf = document.getElementById("erro-cpf");
    const erroTelefone = document.getElementById("erro-telefone");
    const erroCep = document.getElementById("erro-cep");
    const erroDataNascimento = document.getElementById("erro-data-nascimento");
    const erroValor = document.getElementById("erro-valor");
    const erroUrl = document.getElementById("erro-url");
    const erroCartao = document.getElementById("erro-cartao");


// ============== validação do nome ====================================
  if(nome.value.length < 3){
    event.preventDefault();
    erroNome.textContent = "Nome precisa ter pelo menos 3 caracteres.";
    return;
    } else {
    erroNome.textContent = ""; // limpa o span se estiver correto
}
  
  
  const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;

if(!regexNome.test(nome.value)){
  event.preventDefault();
  erroNome.textContent = "O nome não pode conter números.";
  return;
}

  
// ============== validação do email ====================================
  const regexEmail = /\S+@\S+\.\S+/;

  if(!regexEmail.test(email.value)){ 
    event.preventDefault();
    erroEmail.textContent = "Digite um email válido.";
    return;
  } else {
    erroEmail.textContent = ""; // limpa o span se estiver correto
}

// ============== validação da senha ====================================
const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//(?=.*[a-z])letra minúscula
//(?=.*[A-Z])letra maiúscula
//(?=.*\d)número
//(?=.*[\W_])símbolo
//. {8,}mínimo 8 caracteres

if(!regexSenha.test(senha.value)){
    event.preventDefault();
    erroSenha.textContent = "Senha fraca. Use 8 caracteres, maiúscula, número e símbolo.";
    return;

  } else {
    erroSenha.textContent = ""; // limpa o span se estiver correto}
  }


  // ============== validação do Confirmar Senha ====================================
if(senha.value !== confirmarSenha.value){
    event.preventDefault();
    erroConfirmarSenha.textContent = "As senhas não coincidem.";
    return;
    } else {
    erroConfirmarSenha.textContent = ""; // limpa o span se estiver correto
}


  // ============== validação do CPF ====================================
  if(cpf.value.length < 11){
    event.preventDefault();
    erroCpf.textContent = "O CPF deve conter 11 caracteres.";
    return;
    } else {
    erroCpf.textContent = ""; // limpa o span se estiver correto
}




// ============== validação do telefone ====================================
const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;

if (!regexTelefone.test(telefone.value)) {
    event.preventDefault(); 
    erroTelefone.textContent = "Digite um telefone válido no formato (XX) XXXXX-XXXX.";
    return;
} else {
    erroTelefone.textContent = ""; // limpa o span se estiver correto
}


// ============== validação do CEP ====================================
 if (!/^\d{5}-?\d{3}$/.test(cep.value.trim())) {
        erroCep.textContent = "Digite um CEP válido (XXXXX-XXX ou XXXXXXXX).";
        event.preventDefault();
        return;
} else {
    erroCep.textContent = ""; // limpa o span se estiver correto
}



// ============== validação da data ====================================
function validarData(dataNascimento) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    const dataStr = dataNascimento.value.trim();

    if (!regex.test(dataStr)) return false;

    const [dia, mes, ano] = dataStr.split("/").map(Number);
    const dataObj = new Date(ano, mes - 1, dia);

    return dataObj.getFullYear() === ano &&
           dataObj.getMonth() === mes - 1 &&
           dataObj.getDate() === dia;
}

if (!validarData(dataNascimento)) {
    erroDataNascimento.textContent = "Data inválida. Use DD/MM/AAAA.";
   event.preventDefault();
   return;
} else {
    erroDataNascimento.textContent = ""; // limpa o span se estiver correto
}





// ============== validação do valor ====================================
const regexValor = /^\d{1,3}(\.\d{3})*,\d{2}$/;

if(!regexValor.test(valor.value)){
    event.preventDefault();
    erroValor.textContent = "Digite um valor válido. Ex: 1.299,90";
    return;
}else {
    erroValor.textContent = "";
}

// ============== validação do URL ====================================
const regexUrl = /^https?:\/\/.+$/;

if(!regexUrl.test(url.value.trim())){ 
    event.preventDefault();
    erroUrl.textContent = "Digite uma URL válida que comece com http:// ou https://";
    return;
}else{
    erroUrl.textContent = "";
}


// ============== validação do cartão ====================================
const regexCartao = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;

if(!regexCartao.test(cartao.value)){
    event.preventDefault();
    erroCartao.textContent = "Digite um cartão válido. Ex: 4111 1111 1111 1111";
    return;
}

alert("Formulário enviado com sucesso!");
form.submit();

});
