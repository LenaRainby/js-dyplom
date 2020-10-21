import { initLogin } from "./login";
import { initRegister } from "./register";
import {ROOT_NODE} from "./users"
import "./form.scss"

const template = ` <div class="container" id="table"><div class="buttons_container">
<button name="btnSignUp" id="btnSignUp">Sign Up</button>
<button name="btnLogIn" id="btnLogIn">Login</button>
</div>
<form name="registerform" id="registerform" novalidate>
<input type="text" name="login" placeholder="Login" id="loginInput">
<input type="text" name="name" placeholder="Name" id="nameInput">
<input type="number" name="age" placeholder="Age" id="ageInput">
<input type="email" name="email" placeholder="Email" id="emailInput">
<input type="text" name="city" placeholder="City" id="cityInput">
<input type="password" name="password" placeholder="Password" id="passwordInput" autocomplete="on">
<input type="password" name="repeatPassword" placeholder="Repeat Password" id="repeatPassword"
    autocomplete="on">
<button name="btn" id="btnRegister">Register</button>

</form>
<form name="loginform" id="loginform" novalidate>
<input type="email" name="email" placeholder="Email" id="emailInput">
<input type="password" name="password" placeholder="Password" id="passwordInput" autocomplete="on">
<button name="btn" id="btnLogin">Login</button>
</form>
</div>`

export const initForm = () => {
    ROOT_NODE.innerHTML = template;
    const btnLogIn = document.getElementById("btnLogIn");
    const btnSignUp = document.getElementById("btnSignUp");
    const { formLogIn } = initLogin();
    const { formSignUp } = initRegister();

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
}
