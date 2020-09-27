const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

//show input error message
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerText = message
}

//show input success outline
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

//check email format
function checkEmail(input) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(mailformat)) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }

}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(e => {
        if (e.value === '') {
            showError(e, `${getFieldName(e)} is required`)
        } else {
            showSuccess(e)
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min || input.value.length > max) {
        showError(input, `${getFieldName(input)} must has between ${min} and ${max} characters`)
    } else {
        showSuccess(input)
    }
}

//capitalize first letter
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check passwords are equals
function checkMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `${getFieldName(input1)}s are different`)
    } else {
        showSuccess(input2)
    }
}

//Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 16)
    checkLength(password, 6, 16)
    checkEmail(email)
    checkMatch(password, password2)
    checkLength(password2, 6, 16)


})