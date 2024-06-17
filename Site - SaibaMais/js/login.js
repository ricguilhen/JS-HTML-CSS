function criarConta() {
    const email = document.getElementById('email-cad').value;
    const senha = document.getElementById('password-cad').value;
    const confSenha = document.getElementById('password-conf').value;

    if (senha !== confSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    const conta = {
        email,
        senha
    };

    localStorage.setItem(email, JSON.stringify(conta));

    document.getElementById('email-cad').value = '';
    document.getElementById('password-cad').value = '';
    document.getElementById('password-conf').value = '';

    alert('Conta criada com sucesso!');

    window.location.href = "../login.html"
}

function fazerLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    const conta = JSON.parse(localStorage.getItem(email));

    if (conta && conta.senha === senha) {
        alert('Login bem sucedido!');

        logged = "true"

        window.location.href = "../artigos.html"
    } else {
        alert('E-mail ou senha incorretos!');
    }

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}