const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw-hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    })
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Usando [Path(Caminho*): js/objs.js]

// Cadastro

const signupButton = document.querySelector("#signup-button");

signupButton.addEventListener("click", (e) => {
    const emailInput = document.querySelector("#email-cadastro");
    const passwordInput = document.querySelector("#pw-cadastro");
    const confirmPasswordInput = document.querySelector("#pw-conf-cadastro");

    if (!emailInput.value || !passwordInput.value) {
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("A senha e a confirmação de senha não correspondem. Por favor, tente novamente.");
        return;
    }

    e.preventDefault();
    
    const account = {
        username: emailInput.value,
        password: passwordInput.value
    };
    
    let accounts = localStorage.getItem("accounts");
    if (accounts) {
        accounts = JSON.parse(accounts);
    } else {
        accounts = [];
    }

    const emailExiste = accounts.some(acc => acc.username === account.username);
    if (emailExiste) {
        alert("Este e-mail já está em uso. Por favor, insira um e-mail diferente.");
        return;
    }
    
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Conta criada com sucesso. Clique em 'Ok'para ser redirecionado...");

formContainer.classList.remove("active");
});

// Login

const loginButtonNav = document.querySelector("#form-open");
const loginButton = document.querySelector("#login-button");
const loginEmailInput = document.querySelector("#email-login");
const loginPasswordInput = document.querySelector("#pw-login");
const logoutButton = document.querySelector("#logout-button");

const productRegisterOption = document.querySelector("#prod-reg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    let accounts = localStorage.getItem("accounts");
    if (accounts) {
        accounts = JSON.parse(accounts);
    } else {
        alert("Não existem contas cadastradas.");
        return;
    }

    const accountExists = accounts.some(acc => acc.username === loginEmailInput.value && acc.password === loginPasswordInput.value);
    if (accountExists) {
        localStorage.setItem("logged", "true");
        loginButtonNav.style.display = "none";
        logoutButton.style.display = "block";
        alert("Login realizado com sucesso!");

        if (loginEmailInput.value === "admin" && loginPasswordInput.value === "admin") {
            productRegisterOption.style.display = "block";
            localStorage.setItem("admin", "true");
        }
    } else {
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
});

logoutButton.addEventListener("click", () => {
    localStorage.removeItem("logged");
    loginButtonNav.style.display = "block";
    logoutButton.style.display = "none";
    productRegisterOption.style.display = "none";
    localStorage.removeItem("admin");
    alert("Você foi deslogado com sucesso!");
});

// Admin

window.addEventListener("load", () => {
    let accounts = localStorage.getItem("accounts");
    if (accounts) {
        accounts = JSON.parse(accounts);
    } else {
        accounts = [];
    }

    const adminAccountExists = accounts.some(acc => acc.username === "admin" && acc.password === "admin");
    if (!adminAccountExists) {
        accounts.push({username: "admin", password: "admin"});
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }

    if (localStorage.getItem("logged") === "true") {
        loginButtonNav.style.display = "none";
        logoutButton.style.display = "block";

        if (localStorage.getItem("admin") === "true") {
            productRegisterOption.style.display = "block";
        }
    }
});