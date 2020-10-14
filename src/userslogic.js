import { users } from "./constants"

// const users = [
//     {
//         name: "Severus",
//         company: "Potions with Character",
//         email: "potionmaster@hp.com",
//         phone: "+441138580187",
//         balance: "$15000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Lucius",
//         company: "Fashion is My Profession",
//         email: "yourstyleguide@hp.com",
//         phone: "+441139235687",
//         balance: "$30000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Harry",
//         company: "Flying Broom",
//         email: "cleanaddict@hp.com",
//         phone: "+441332473297",
//         balance: "$2000",
//         isActive: false,
//         gender: "male"
//     },
//     {
//         name: "Ron",
//         company: "Feel the Rythm",
//         email: "dancelikeapro@hp.com",
//         phone: "+441378972358",
//         balance: "$3000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Hermione",
//         company: "Charity Sweaters",
//         email: "charitysweaters@hp.com",
//         phone: "+441825932367",
//         balance: "$1000",
//         isActive: false,
//         gender: "female"
//     },
//     {
//         name: "Draco",
//         company: "Royal Acting",
//         email: "dramaqueen@hp.com",
//         phone: "+441634582499",
//         balance: "$7000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Luna",
//         company: "Seeing the Unseen",
//         email: "thirdeyeexpert@hp.com",
//         phone: "+441992888241",
//         balance: "$1500",
//         isActive: false,
//         gender: "female"
//     },
//     {
//         name: "Dumbledore",
//         company: "Gossip Gurls",
//         email: "gossipingqueer@hp.com",
//         phone: "+445249983953",
//         balance: "$6000",
//         isActive: true,
//         gender: "male"
//     },
//     {
//         name: "Narcissa",
//         company: "Blond Magic",
//         email: "naturalblondewaifu@hp.com",
//         phone: "+4411981223221",
//         balance: "$4000",
//         isActive: false,
//         gender: "female"
//     },
//     {
//         name: "Bellatrix",
//         company: "Pleasure in Pain",
//         email: "bringyoupain@hp.com",
//         phone: "+441838192351",
//         balance: "$3500",
//         isActive: true,
//         gender: "female"
//     }
// ]


export const usersLogicInit = function () {
    for (let user of users) {
    const listListContainer = document.getElementById('listListContainer')
        const listContainer = document.createElement('div');
        listContainer.className = "listContainer";
        listListContainer.append(listContainer)
        let divRow = document.createElement('div');
        divRow.className = "divRow";
        listContainer.append(divRow);
        let divSection1 = document.createElement('div');
        divSection1.className = "divSection";
        divSection1.innerText = user.name;
        divRow.append(divSection1);
        let divSection2 = document.createElement('div');
        divSection2.className = "divSection";
        divSection2.innerText = user.company;
        divSection1.after(divSection2);
        let divSection3 = document.createElement('div');
        divSection3.className = "divSection";
        divSection3.innerText = user.email;
        divSection2.after(divSection3);
        let divSection4 = document.createElement('div');
        divSection4.className = "divSection";
        divSection4.innerText = user.phone;
        divSection3.after(divSection4);
        let divSection5 = document.createElement('div');
        divSection5.className = "divSection";
        divSection5.innerText = user.balance;
        divSection4.after(divSection5);
        let btn = document.createElement('button');
        btn.className = "btnList";
        btn.innerText = "Удалить";
        divRow.after(btn);

        if (user.isActive) {
            divRow.style.backgroundColor = "white"
        } else {
            divRow.style.backgroundColor = "grey"
        }

        btn.addEventListener('click', function () {
            divRow.remove();
            users.splice(0, 1);
            btn.remove();
            console.log(user);
            console.log(users);
            // firstMessage.remove();
            const arr = []
            users.forEach(item => arr.push(item.balance))
            const numbers = arr.map(toNumbers)

            function toNumbers(item) {
                return Number(item.slice(1))
            }


            const balance = numbers.reduce((item1, item2) => (item1 > item2) ? item1 : item2)
            const females = users.filter(item => item.gender === "female").length
            const males = users.filter(item => item.gender === "male").length

            firstMessage.innerText = `Males: ${males}. Females: ${females}.
                 The biggest balance among everyone: $${balance}.`
        })

    }
}


const arr = []
users.forEach(item => arr.push(item.balance))
console.log(arr)


const numbers = arr.map(toNumbers)

function toNumbers(item) {
    return Number(item.slice(1))
}

console.log(numbers)


const balance = numbers.reduce((item1, item2) => item1 > item2 ? item1 : item2)
console.log(balance)


const females = users.filter(item => item.gender === "female").length

const males = users.filter(item => item.gender === "male").length

const firstMessage = document.createElement('div');
firstMessage.className = "firstMessage";
firstMessage.innerText = `Males: ${males}. Females: ${females}.
    The biggest balance among everyone: $${balance}.`
table.after(firstMessage);




