function getAccounts() {
    let accounts = localStorage.getItem("accounts");
    if (accounts) {
        accounts = JSON.parse(accounts);
    } else {
        accounts = [];
    }
    return accounts;
}

function login(username, password) {
    const accounts = getAccounts();
    const accountExists = accounts.some(acc => acc.username === username && acc.password === password);
    if (accountExists) {
        localStorage.setItem("logged", "true");
        if (username === "admin" && password === "admin") {
            localStorage.setItem("admin", "true");
        }
        updateNavbar();
        return true;
    } else {
        return false;
    }
}

function logout() {
    localStorage.removeItem("logged");
    localStorage.removeItem("admin");
    updateNavbar();
}

function isLoggedIn() {
    return localStorage.getItem("logged") === "true";
}

function isAdmin() {
    return localStorage.getItem("admin") === "true";
}

function updateNavbar() {
    const loginButtonNav = document.querySelector("#form-open");
    const logoutButton = document.querySelector("#logout-button");
    const productRegisterOption = document.querySelector("#prod-reg");

    if (isLoggedIn()) {
        loginButtonNav.style.display = "none";
        logoutButton.style.display = "block";
        if (isAdmin()) {
            productRegisterOption.style.display = "block";
        } else {
            productRegisterOption.style.display = "none";
        }
    } else {
        loginButtonNav.style.display = "block";
        logoutButton.style.display = "none";
        productRegisterOption.style.display = "none";
    }
}

window.addEventListener("load", updateNavbar);