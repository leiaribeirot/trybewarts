const botaoLogin = document.querySelector('#botaoLogin');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

// Validação Login

botaoLogin.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
