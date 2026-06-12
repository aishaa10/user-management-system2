let users = [
    {
        sn: 1,
        name: "john doe",
        email: "john@gmail.com",
        age: 25,
    },
    {
        sn: 2,
        name: "jane smith",
        email: "jane@gmail.com",
        age: 22,
    },
    {
        sn: 3,
        name: "michael",
        email: "michael@gmail.com",
        age: 30,
    },
    {
        sn: 4,
        name: "sarah",
        email: "sarah@gmail.com",
        age: 27,
    },
    {
        sn: 5,
        name: "david",
        email: "david@gmail.com",
        age: 24,
    },
    {
        sn: 6, 
        name: "zara",
        email:"zara@gmail.com",
        age: 26,
    },
    {
        sn: 7,
        name: "emily",
        email: "emily@gmail.com",
        age: 29,
    },
    {
        sn: 8,
        name: "sophia",
        email: "sophia@gmail.com",
        age: 32,
    },
    {
        sn: 9,
        name: "james",
        email: "james@gmail.com",
        age: 31,
    },
    {
        sn: 10,
        name: "olivia",
        email:"olivia@gmail.com",
        age: 28,
    },
    {
        sn: 11,
        name: "william",
        email: "william@gmail.com",
        age: 31,
    },
    {
        sn: 12,
        name: "mia",
        email: "mia@gmail.com",
        age: 24,
    },
    {
        sn: 13,
        name: aisha,
        email: "aisha@gmail.com",
        age: 20,
    },
    {
        sn: 14,
        name: "ben",
        email: "ben@gmail.com",
        age: 34,
    },
    {
        sn: 15,
        name: "luca",
        email: "luca@gmail.com",
        age: 24,
    },
    {
        sn: 16,
        name: "henry",
        email: "henry@gmail.com",
        age: 16,
    },
    {
        sn: 17,
        name: "amy",
        email: "amy@gmail.com",
        age: 22,
    },
    {
        sn: 18,
        name: "alex",
        email: "alex@gmail.com",
        age: 18,
    },
    {
        sn: 19,
        name: "mei",
        email: "mei@gmail.com",
        age: 28,
    },
    {
        sn: 20,
        name: "zainab",
        email: "zainab@gmail.com",
        age: 22,
    },

]

function searchUser() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    let table = document.getElementById("userTableBody");

    table.innerHTML = "";

    for(let i = 0; i < users.length; i++) {

        if(users[i].name.toLowerCase().includes(search)) {

            table.innerHTML += `
            <tr>
                <td>${users[i].id}</td>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
                <td>${users[i].age}</td>
            </tr>
            `;
        }

    }
}