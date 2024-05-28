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
    const body = document.querySelector("body");
    const adminMessage = document.querySelector("#admin-message");
    const home = document.querySelector(".home");

    if (isLoggedIn()) {
        loginButtonNav.style.display = "none";
        logoutButton.style.display = "block";
        if (isAdmin()) {
            home.style.backgroundImage = "none"
            body.style.backgroundImage = "url('img/ADMINhomeBG-4K.png')";
            adminMessage.style.display = "block";
        } else {
            body.style.backgroundImage = "url('img/VERDADEIROhomeBG-4K.png')";
            adminMessage.style.display = "none";
        }
    } else {
        loginButtonNav.style.display = "block";
        logoutButton.style.display = "none";
        body.style.backgroundImage = "url('img/VERDADEIROhomeBG-4K.png')";
        adminMessage.style.display = "none";
    }
}

window.updateNavbar = updateNavbar;
window.addEventListener("load", updateNavbar);