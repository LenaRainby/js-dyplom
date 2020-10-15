import {clients} from "./clients"

export const clientsLogicInit = function () {
    for (let client of clients) {
    const listListContainer = document.getElementById('listListContainer')
        const listContainer = document.createElement('div');
        listContainer.className = "listContainer";
        listListContainer.append(listContainer)
        let divRow = document.createElement('div');
        divRow.className = "divRow";
        listContainer.append(divRow);
        let divSection1 = document.createElement('div');
        divSection1.className = "divSection";
        divSection1.innerText = client.name;
        divRow.append(divSection1);
        let divSection2 = document.createElement('div');
        divSection2.className = "divSection";
        divSection2.innerText = client.company;
        divSection1.after(divSection2);
        let divSection3 = document.createElement('div');
        divSection3.className = "divSection";
        divSection3.innerText = client.email;
        divSection2.after(divSection3);
        let divSection4 = document.createElement('div');
        divSection4.className = "divSection";
        divSection4.innerText = client.phone;
        divSection3.after(divSection4);
        let divSection5 = document.createElement('div');
        divSection5.className = "divSection";
        divSection5.innerText = client.balance;
        divSection4.after(divSection5);
        let btn = document.createElement('button');
        btn.className = "btnList";
        btn.innerText = "Удалить";
        divRow.after(btn);

        if (client.isActive) {
            divRow.style.backgroundColor = "white"
        } else {
            divRow.style.backgroundColor = "grey"
        }

        btn.addEventListener('click', function () {
            divRow.remove();
            clients.splice(0, 1);
            btn.remove();
            console.log(client);
            console.log(clients);
            // firstMessage.remove();
            const arr = []
            clients.forEach(item => arr.push(item.balance))
            const numbers = arr.map(toNumbers)

            function toNumbers(item) {
                return Number(item.slice(1))
            }


            const balance = numbers.reduce((item1, item2) => (item1 > item2) ? item1 : item2)
            const females = clients.filter(item => item.gender === "female").length
            const males = clients.filter(item => item.gender === "male").length

            firstMessage.innerText = `Males: ${males}. Females: ${females}.
                 The biggest balance among everyone: $${balance}.`
        })

    }
}


const arr = []
clients.forEach(item => arr.push(item.balance))
console.log(arr)


const numbers = arr.map(toNumbers)

function toNumbers(item) {
    return Number(item.slice(1))
}

console.log(numbers)

// Number(balance.replace(/\$|\,/g, ""))

const balance = numbers.reduce((item1, item2) => item1 > item2 ? item1 : item2)
console.log(balance)


const females = clients.filter(item => item.gender === "female").length

const males = clients.filter(item => item.gender === "male").length

const firstMessage = document.createElement('div');
firstMessage.className = "firstMessage";
firstMessage.innerText = `Males: ${males}. Females: ${females}.
    The biggest balance among everyone: $${balance}.`
table.after(firstMessage);




