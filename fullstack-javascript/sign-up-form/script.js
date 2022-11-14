const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-c");
const submit = document.querySelector("button");
const form = document.querySelector("form");

submit.addEventListener("click", () => {
    if (password.value !== passwordConfirmation.value) {
        passwordConfirmation.setCustomValidity("The passwords must be identical");
    } else {
        form.submit();
    }
})