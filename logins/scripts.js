document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch("login.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch("signup.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });
});
