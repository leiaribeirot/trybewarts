const botaoLogin = document.querySelector('#botaoLogin');
const login = document.querySelector('#login');
const password = document.querySelector('#password');
const agree = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.getElementById('textarea');
const count = document.getElementById('counter');

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
  const max = textArea.maxLength;
  const max2 = textArea.value.length;
  count.innerText = max - max2;
});
