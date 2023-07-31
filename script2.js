//Validação login

function login() {
  // Obter os valores digitados pelo usuário
  const usuario = document.getElementsByName('usuario')[0].value;
  const senha = document.getElementsByName('senha')[0].value;

  // Verificar se o usuário e senha são corretos
  if (usuario === 'admin' && senha === '12345') {

    // Redirecionar para a página "index.html"
    window.location.href = 'index.html';
  } else {
    // Mostrar um alerta informando que a senha está incorreta
    alert('Senha incorreta. Por favor, tente novamente.');
  }
}

function goLogin() {
  window.location.href = 'login.html';
}

function backHome() {
  window.location.href = 'index.html';
}
