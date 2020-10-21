import { initClients } from "./clients/clients";
import { initForm } from "./form/form";
import { initCalendar } from "./calendar/calendar"
import { ROOT_NODE } from "./form/users";

const clearAllLinksClasses = () => {
    const linkList = document.getElementsByTagName("a")
    for (let i = 0; i < linkList.length; i++) {
        linkList[i].className = null;
    }
}

const router = () => {
    if (window.location.hash === "#/clients") {
        clearAllLinksClasses();
        const linkClients = document.getElementById("linkClients")
        linkClients.className = "activeLink"
        loginProtector(initClients);

    } else if (window.location.hash === "#/form") {
        clearAllLinksClasses();
        const linkForm = document.getElementById("linkForm")
        linkForm.className = "activeLink"
        initForm();
    } else if (window.location.hash === "#/") {
        clearAllLinksClasses();
        const linkHome = document.getElementById("linkHome")
        linkHome.className = "activeLink"
        loginProtector((user) => {
            const device = window.navigator.userAgent;
            console.log(device);
            ROOT_NODE.innerHTML = `<div class="welcomeText">Welcome, ${user}! Now you have access to client's database.
            <br>
            <br>
            Your entering device is ${device}</div>
            
            `;
        })
        function secretMessage() {
            document.body.style.backgroundImage = './assets/secretMessage.gif';
            console.log("hi")
        }

        setTimeout(secretMessage, 1000);
    } else if (window.location.hash === "#/calendar") {
        clearAllLinksClasses();
        const linkCalendar = document.getElementById("linkCalendar")
        linkCalendar.className = "activeLink"
        initCalendar();
    } else {
        ROOT_NODE.innerHTML = `<div class="wrongPage">Page not found</div>`
    }
}

export const initRouter = () => {
    window.addEventListener("hashchange", router);
    router()
}

export const loginProtector = (initFn) => {
    const user = localStorage.getItem("user");
    if (user) {
        // window.location.hash = "/";
        initFn(user)
    } else {
        window.location.hash = "/form";
    }

}