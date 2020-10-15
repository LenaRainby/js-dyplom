import { users } from "./users"

export function initLogin() {

    const formLogIn = document.forms.loginform;
    const btnLogin = document.getElementById("btnLogin");
    const INVALID_CLASS = "invalid";

    let errorElement = null; //here we'll store our error message

    const formHelperLogIn = {
        email: {
            value: "",
            valid: false,
            checkValidation() {
                const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                this.email.valid = regex.test(this.email.value);
            },
        },
        password: {
            value: "",
            valid: false,
            checkValidation() {
                this.password.valid = this.password.value !== "";
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



            if (!user) {
                formLogIn.reset();
                errorElement = document.createElement("div");
                errorElement.classList.add("messageWrong");
                errorElement.innerText = "Пользователь не зарегистрирован.";
                btnLogin.after(errorElement);
            }

            else if (user && this.password.value === user.password) {
                console.log(`Hello, ${user.name}!`);
            } else {
                formLogIn.reset();
                errorElement = document.createElement("div");
                errorElement.classList.add("messageWrong");
                errorElement.innerText = "Вы ввели неверный пароль. Попробуйте снова.";
                btnLogin.after(errorElement);
            }

        }

    };


    loginform.addEventListener("input", function (event) {
        const value = event.target.value;
        const name = event.target.name;

        if (errorElement) {
            errorElement.remove();
            errorElement = null;
        }

        formHelperLogIn[name].value = value;
        const bindedValidator = formHelperLogIn[name].checkValidation.bind(formHelperLogIn);
        bindedValidator();

        btnLogin.disabled = !formHelperLogIn.checkFormValidation();

        handleClassAdding(event.target, formHelperLogIn[name].valid)


    })

    function handleClassAdding(domNode, isValid) {
        if (isValid) {
            domNode.classList.remove(INVALID_CLASS);
        } else {
            domNode.classList.add(INVALID_CLASS);
        }
    }


    loginform.addEventListener("submit", function (event) {
        event.preventDefault();
        formHelperLogIn.getValue();
    });

    return {formLogIn}
}
