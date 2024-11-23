document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;

    const user = {
        firstName,
        lastName,
        email,
        password,
        gender
    };

    localStorage.setItem(email, JSON.stringify(user));
    
    alert("Registro exitoso. Puedes iniciar sesión ahora.");
    window.location. href = "login.html"; 

});