const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === "" || password === "") {
        alert("Fill in all the fields");
        return;
    }

    const result = {
            mail,
            password,
        };

        console.log(result);
        form.reset();

}