console.log("script loaded");
let selectedUserIndex = -1;
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
        name: "aisha",
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

function displayUsers(data = users) {
    let table = document.getElementById("userTableBody");
    table.innerHTML = "";

    data.forEach(user => {
        table.innerHTML += `
        <tr>
            <td>${user.sn}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            
        <td>
                <button
                    class="btn btn-warning btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#updateUserModal"
                    onclick= "updateUser(${user.sn})">
                    Update
                </button>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="deleteUser(${user.sn})">
                    Delete
                </button>
            </td>

        
        </tr>
        `;
    });
}


displayUsers();
document.getElementById("addName").value ="";
document.getElementById("addEmail").value ="";
document.getElementById("addAge").value ="";

    


    // add user


function addUser() {
console.log("dog")
  let name = document.getElementById("addName").value;
  let email = document.getElementById("addEmail").value;
  let age = document.getElementById("addAge").value;


  if(name == "" || email == "" || age == "") {
    alert("Fill all fields");

    }
  
  let newSN = users.length + 1;
  users.push({sn: newSN, name: name, email: email, age: Number(age)})
console.log(users)
displayUsers();
}

//update user
function updateUser(sn){
    let index= users.findIndex(u => u.sn === sn)

    let newName = prompt("enter new name:", users[index].name);
    let newAge = prompt("enter new age:", users[index].age);
    let newEmail = prompt("enter new email:", users[index].email);

    users[index].name = newName;
    users[index].email = newEmail;
    users[index].age = newAge;
 console.log(users[index])

 displayUsers();
}
  //  Delete user
function deleteUser(sn) {
  if(confirm("Delete this user?")) {
    users = users.filter(u => u.sn !== sn);
    console.log(users)
    displayUsers();
  }
}


//  Search user
function searchUser() {
  let text = document.getElementById("searchInput").value.toLowerCase();
  let filtered = [];
  
  users.forEach(u => {
    if(u.name.toLowerCase().includes(text) || u.email.toLowerCase().includes(text)) {
      filtered.push(u);
    }
  });
  
  displayUsers(filtered);

}

