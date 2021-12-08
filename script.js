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

// Salva Input Formulário Geral 1

function inputMaterias(arr) {
  const matSalvas = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].checked) {
      matSalvas.push(arr[i].value);
    }
  }
  return matSalvas;
}

function validate() {
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const emailInput = document.getElementById('input-email').value;
    const house = document.getElementById('house').value;
    const family = document.querySelector('input[name="family"]:checked').value;
    const avaliacao = document.querySelector('input[name ="rate"]:checked').value;
    const forms = document.getElementById('evaluation-form');
    const observacoes = document.getElementById('textarea').value;
    const conteudo = inputMaterias(document.getElementsByName('conteudo'));
    forms.innerHTML = '';
    const formulario = `Nome: ${name} ${lastName} Email: ${emailInput} 
    Casa: ${house} Família: ${family} Matérias: ${conteudo.join(', ')}
    Avaliação: ${avaliacao} Observações: ${observacoes}`;
    forms.innerText = formulario;
  });
}
validate();
