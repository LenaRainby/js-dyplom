import "./clients.scss"


export const clientsLogicInit = function (clients) {
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

            function toNumbers(item) {
                return Number(item.replace(/\$|\,/g, ""))
            }

            const getBiggestBalance = function () {
                let biggestBalance = 0;
                for (let i = 0; i < clients.length; i++) {
                    console.log(clients[i].balance)
                    if (toNumbers(clients[i].balance) > biggestBalance) {
                        biggestBalance = toNumbers(clients[i].balance)
                    }
                }
                console.log(biggestBalance)
                return biggestBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            console.log(clients)

            //     const balance = function (clients) {
            //         const arr = []
            //         clients.forEach(item => arr.push(item.balance))
            //         const numbers = arr.map(toNumbers)
            //         console.log(numbers)
            //         numbers.reduce((item1, item2) => (item1 > item2) ? item1 : item2)
            //     }
            //     console.log(balance)


            const females = clients.filter(item => item.gender === "female").length;
            const males = clients.filter(item => item.gender === "male").length;

            const firstMessage = document.querySelector(".firstMessage")
            console.log(firstMessage)
            firstMessage.innerText = `Males: ${males}. Females: ${females}.
                     The biggest balance among everyone: $${getBiggestBalance()}.`
        });

    }
}

export const messageBox = (clients) => {
    function toNumbers(item) {
        return Number(item.replace(/\$|\,/g, ""))
    }

    const getBiggestBalance = function () {
        let biggestBalance = 0
        for (let i = 0; i < clients.length; i++) {
            // console.log(clients)
            // console.log(clients.length)
            // console.log(biggestBalance)
            console.log(clients[i].balance)
            if (toNumbers(clients[i].balance) > biggestBalance) {
                biggestBalance = toNumbers(clients[i].balance)
            }
        }
        console.log(biggestBalance)
        return biggestBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const females = clients.filter(item => item.gender === "female").length;
    const males = clients.filter(item => item.gender === "male").length;

    const firstMessage = document.createElement('div');
    firstMessage.className = "firstMessage";
    firstMessage.innerText = `Males: ${males}. Females: ${females}.
                     The biggest balance among everyone: $${getBiggestBalance()}.`
    const clientsList = document.getElementById('listListContainer')
    clientsList.before(firstMessage);
}


