var data = [
    {
        "id": 1,
        "name": "Alice Smith",
        "age": 29,
        "occupation": "Engineer",
        "city": "New York"
    },
    {
        "id": 2,
        "name": "Bob Johnson",
        "age": 34,
        "occupation": "Teacher",
        "city": "Los Angeles"
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "age": 28,
        "occupation": "Doctor",
        "city": "Chicago"
    },
    {
        "id": 4,
        "name": "Diana Ross",
        "age": 42,
        "occupation": "Artist",
        "city": "Houston"
    },
    {
        "id": 5,
        "name": "Ethan Davis",
        "age": 36,
        "occupation": "Chef",
        "city": "Phoenix"
    },
    {
        "id": 6,
        "name": "Fiona Clark",
        "age": 31,
        "occupation": "Nurse",
        "city": "Philadelphia"
    },
    {
        "id": 7,
        "name": "George Martinez",
        "age": 45,
        "occupation": "Architect",
        "city": "San Antonio"
    },
    {
        "id": 8,
        "name": "Hannah Lewis",
        "age": 27,
        "occupation": "Writer",
        "city": "San Diego"
    },
    {
        "id": 9,
        "name": "Ian Walker",
        "age": 39,
        "occupation": "Scientist",
        "city": "Dallas"
    },
    {
        "id": 10,
        "name": "Julia White",
        "age": 33,
        "occupation": "Musician",
        "city": "San Jose"
    }
];
//     function dispalyData(){
//     for(i=0;i<data.length;i++){
//         var myTr=document.createElement("tr")//creating the rows
//         for (a in data[i]){//elements present in datamonitoring
//             var myTd=document.createElement("td")//
//             myTd.innerHTML=data[i][a]
//             myTr.appendChild(myTd)
//         }

//         // creating edit button
//         var editBut=document.createElement("button")
//         var editTd=document.createElement("td")
//         editBut.innerHTML="Edit"
//         editTd.appendChild(editBut)
//         myTr.appendChild(editTd)

//         // creating or adding the delet button 
//         var delBut=document.createElement("button")
//         var delTd=document.createElement("td")
//         delBut.innerHTML="Delet"
//         delTd.appendChild(delBut)
//         myTr.appendChild(delTd)
//         document.querySelector("tbody").appendChild(myTr)
//     }
// }
dispalyData()
function addUser() {
var newStudent = {
    "id": document.getElementById('id').value,
    "name": document.getElementById("name").value,
    "age": document.getElementById("age").value,
    "occupation": document.getElementById("occupation").value,
    "city": document.getElementById("city").value
}
data.push(newStudent);
dispalyData()
clearForm();
}


function clearForm() {
document.getElementById('id').value = "";
document.getElementById("name").value = "";
document.getElementById("age").value = "";
document.getElementById("occupation").value = "";
document.getElementById("city").value = "";

}
function dispalyData() {
document.querySelector('tbody').innerHTML = ""
for (i = 0; i < data.length; i++) {
    // Create a tr
    var myTr = document.createElement("tr");
    for (a in data[i]) {
        var myTd = document.createElement("td");
        myTd.innerHTML = data[i][a]
        myTr.appendChild(myTd);
    }

    // Edit Td 
    var editTd = document.createElement('td');
    var editBtn = document.createElement('button');
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser(" + i + ")")
    editTd.appendChild(editBtn)
    myTr.appendChild(editTd)

    // Delete Td 
    var deleteTd = document.createElement('td');
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute('onclick', "deleteUser(" + i + ")")
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd)
    document.querySelector("tbody").appendChild(myTr)
}
}
dispalyData()
var index = null;
function editUser(i) {
index = i;
console.log("editUser Called !!!" + i);

document.getElementById('id').value = data[i].id;
document.getElementById("name").value = data[i].name;
document.getElementById("age").value = data[i].age;
document.getElementById("occupation").value = data[i].occupation;
document.getElementById("city").value = data[i].city;

document.getElementById("updateBtn").style.display = "block";
document.getElementById("addBtn").style.display = "none";

}

function deleteUser(i) {
console.log("deleteUser Called !!" + i);
data.splice(i, 1);
dispalyData()
}

function updateUser() {
var newStudent = {
    "id": document.getElementById('id').value,
    "name": document.getElementById("name").value,
    "age": document.getElementById("age").value,
    "occupation": document.getElementById("occupation").value,
    "city": document.getElementById("city").value
}
data [index] = newStudent;
dispalyData();
clearForm();
document.getElementById("updateBtn").style.display = "none";
document.getElementById("addBtn").style.display = "block";
}

