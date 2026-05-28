document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("confirmation").textContent =
        "Registration Successful!";
});