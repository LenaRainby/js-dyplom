import {initLogin} from "./login"
import {initRegister} from "./register"

import "./assets/styles/style.scss"


const btnLogIn = document.getElementById("btnLogIn");
const btnSignUp = document.getElementById("btnSignUp");
const {formLogIn} = initLogin();
const {formSignUp} = initRegister();


btnLogIn.addEventListener("click", function () {
    formSignUp.style.display = "none";
    formLogIn.style.display = "block";
    if (btnLogIn.style.backgroundColor = "rgb(192, 190, 192)") {
        btnLogIn.style.backgroundColor = "rgba(51, 47, 50, 0.781)";
    }
    if (btnSignUp.style.backgroundColor = "rgba(51, 47, 50, 0.781)") {
        btnSignUp.style.backgroundColor = "rgb(192, 190, 192)";
    }

})

btnSignUp.addEventListener("click", function () {
    formLogIn.style.display = "none";
    formSignUp.style.display = "block";
    if (btnSignUp.style.backgroundColor = "rgb(192, 190, 192)") {
        btnSignUp.style.backgroundColor = "rgba(51, 47, 50, 0.781)";
    }
    if (btnLogIn.style.backgroundColor = "rgba(51, 47, 50, 0.781)") {
        btnLogIn.style.backgroundColor = "rgb(192, 190, 192)";
    }
})

