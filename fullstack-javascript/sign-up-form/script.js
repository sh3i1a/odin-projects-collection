const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-c");
const submit = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (password.value !== passwordConfirmation.value) {
        passwordConfirmation.setCustomValidity("The passwords must be identical");
    } else {
        alert("The form is valid ! 🎉")
    }
})