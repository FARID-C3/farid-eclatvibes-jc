document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert("Inicio de sesión exitoso.");
        localStorage.setItem("loggedIn", "true"); 
        window.location.href = "index.html"; 
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});


