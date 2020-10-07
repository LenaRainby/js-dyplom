import { users } from "./constants.js"

export function initRegister() {
    const formSignUp = document.forms.registerform;
    const btnRegister = document.getElementById("btnRegister");
    const INVALID_CLASS = "invalid";
    let errorElement = null; //here we'll store our error message

    const formHelperSignUp = {
        login: {
            value: "",
            valid: false,
            checkValidation() {
                const regex = /[,.]/g;
                this.login.valid = this.login.value !== "" && !this.login.value.match(regex);
            }
        },
        name: {
            value: "",
            valid: false,
            checkValidation() {
                this.name.valid = this.name.value !== "";
            },
        },
        age: {
            value: "",
            valid: false,
            checkValidation() {
                const regex = /\d/g;
                this.age.valid = this.age.value.match(regex);
            },
        },
        email: {
            value: "",
            valid: false,
            checkValidation() {
                const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                this.email.valid = regex.test(this.email.value);
            },
        },
        city: {
            value: "",
            valid: false,
            checkValidation() {
                this.city.valid = this.city.value !== "";
            },
        },
        password: {
            value: "",
            valid: false,
            checkValidation() {
                this.password.valid = this.password.value !== "";
            },
        },
        repeatPassword: {
            value: "",
            valid: false,
            checkValidation() {
                this.repeatPassword.valid = this.repeatPassword.value === this.password.value
            },
        },

        checkFormValidation() {
            for (const key in this) {
                if (this[key].valid === false && typeof this[key] !== "function") {
                    return false;
                }
            }
            return true;
        },

        getValue() {
            let user = users.find(item => item.email === this.email.value)
            if (user) {
                formSignUp.reset();
                errorElement = document.createElement("div");
                errorElement.classList.add("messageWrong");
                errorElement.innerText = "Такой пользователь уже зарегистрирован.";
                btnRegister.after(errorElement);
            } else {
                return users.push({
                    login: this.login.value,
                    name: this.name.value,
                    age: this.age.value,
                    email: this.email.value,
                    city: this.city.value,
                    password: this.password.value,
                })
            }
        }
    };

    formSignUp.addEventListener("input", function (event) {
        const value = event.target.value;
        const name = event.target.name;

        formHelperSignUp[name].value = value;
        const bindedValidator = formHelperSignUp[name].checkValidation.bind(formHelperSignUp);
        bindedValidator();

        btnRegister.disabled = !formHelperSignUp.checkFormValidation();

        handleClassAdding(event.target, formHelperSignUp[name].valid)


    })

    function handleClassAdding(domNode, isValid) {
        if (isValid) {
            domNode.classList.remove(INVALID_CLASS);
        } else {
            domNode.classList.add(INVALID_CLASS);
        }
    }

    formSignUp.addEventListener("submit", function (event) {
        event.preventDefault();
        formHelperSignUp.getValue();
        console.log(users);
    });

    return {formSignUp}
}

