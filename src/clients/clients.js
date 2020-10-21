import { clientsLogicInit, messageBox } from "./clientsLogic"
import { ROOT_NODE } from "../form/./users"

// export const clients = [
//     {
//         name: "Severus",
//         company: "Potions with Character",
//         email: "potionmaster@hp.com",
//         phone: "+441138580187",
//         balance: "$15,000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Lucius",
//         company: "Fashion is My Profession",
//         email: "yourstyleguide@hp.com",
//         phone: "+441139235687",
//         balance: "$30,000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Harry",
//         company: "Flying Broom",
//         email: "cleanaddict@hp.com",
//         phone: "+441332473297",
//         balance: "$2,000",
//         isActive: false,
//         gender: "male"
//     },
//     {
//         name: "Ron",
//         company: "Feel the Rythm",
//         email: "dancelikeapro@hp.com",
//         phone: "+441378972358",
//         balance: "$3,000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Hermione",
//         company: "Charity Sweaters",
//         email: "charitysweaters@hp.com",
//         phone: "+441825932367",
//         balance: "$1,000",
//         isActive: false,
//         gender: "female"
//     },
//     {
//         name: "Draco",
//         company: "Royal Acting",
//         email: "dramaqueen@hp.com",
//         phone: "+441634582499",
//         balance: "$7,000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Luna",
//         company: "Seeing the Unseen",
//         email: "thirdeyeexpert@hp.com",
//         phone: "+441992888241",
//         balance: "$1,500",
//         isActive: false,
//         gender: "female"
//     },
//     {
//         name: "Dumbledore",
//         company: "Gossip Gurls",
//         email: "gossipingqueer@hp.com",
//         phone: "+445249983953",
//         balance: "$6,000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Narcissa",
//         company: "Blond Magic",
//         email: "naturalblondewaifu@hp.com",
//         phone: "+4411981223221",
//         balance: "$4,000",
//         isActive: false,
//         gender: "female"
//     },
//     {
//         name: "Bellatrix",
//         company: "Pleasure in Pain",
//         email: "bringyoupain@hp.com",
//         phone: "+441838192351",
//         balance: "$3,500",
//         isActive: true,
//         gender: "female"
//     }
// ]

const template = `<div class="listListContainer" id="listListContainer"></div>`



export const initClients = () => {
    ROOT_NODE.innerHTML = template;
    fetch("https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json")
        .then((response) => {
            return response.json();
        }).then((clients) => {
            console.log(clients)
            messageBox(clients);
            clientsLogicInit(clients);
        }).catch ((error) => {
            console.log(error)
        })
}

//fetch in async await style


// const initClient = async () => {
//     try {
//         const response = await fetch("https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json")
//         const clients = await response.json();
//         console.log(clients)
//         messageBox(clients);
//         clientsLogicInit(clients);

//     } catch (error) {
//         console.log(error)
//     }
// }

// initClient();

