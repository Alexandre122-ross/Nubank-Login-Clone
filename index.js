const getCPF = document.querySelector('#input_cpf-data');
const getPassword = document.querySelector('#input_password-data');
const getErrorMsg = document.querySelector('#error_message');
const getLoginBtn = document.querySelector('#login-btn');

getCPF.addEventListener('keypress', () => {
  if(getCPF.value.length == 3 || getCPF.value.length == 7) {
    getCPF.value += '.';
  };

  if(getCPF.value.length == 11) {
    getCPF.value += '-';
  };
});

getLoginBtn.addEventListener('click', () => {
  if(getCPF.value == '' && getPassword.value !== '') {
    getErrorMsg.innerHTML = 'CPF deve ser preenchido';
  }

  if(getCPF.value !== '' && getPassword.value == '') {
    getErrorMsg.innerHTML = 'Senha deve ser preenchido';
  }
  
  if(getCPF.value == '' && getPassword.value == '') {
    getErrorMsg.innerHTML = 'CPF e senha deve ser preenchido';
  }

  if(getCPF.value !== '' && getPassword.value !== '') {
    getErrorMsg.innerHTML = '';
    alert('CPF: ' + getCPF.value);
  }
});