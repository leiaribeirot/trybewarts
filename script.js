const botaoLogin = document.querySelector('#botaoLogin');
const login = document.querySelector('#login');
const password = document.querySelector('#password');
const agree = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');

// Validação Login

botaoLogin.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Checa do Botão Agree

window.onload = () => {
  submitBtn.disabled = true;
};

agree.addEventListener('click', () => {
  if (agree.checked === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

// Atualiza TextArea
textArea.addEventListener('keyup', () => {
  const areaText = textArea.maxLength;
  const cont = textArea.value.length;
  contador.innerText = areaText - cont;
});
