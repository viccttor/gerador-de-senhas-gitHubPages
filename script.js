document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    if (isNaN(length) || length < 4 || length > 300) {
        alert('Por favor, insira um tamanho válido (4-300).');
        return;
    }

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*()-_=+';
    
    let charset = '';
    
    if (document.getElementById('include-letters').checked) {
        charset += letters;
    }
    if (document.getElementById('include-numbers').checked) {
        charset += numbers;
    }
    if (document.getElementById('include-special').checked) {
        charset += special;
    }
    
    if (charset === '') {
        alert('Por favor, selecione pelo menos uma opção.');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Senha copiada: ' + passwordField.value);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Acionado!');

    const lengthSlider = document.getElementById('length-slider');
    const lengthInput = document.getElementById('length');

    lengthSlider.addEventListener('input', () => {
        lengthInput.value = lengthSlider.value;
    });

    lengthInput.addEventListener('input', () => {
        lengthSlider.value = lengthInput.value;
    });
});
