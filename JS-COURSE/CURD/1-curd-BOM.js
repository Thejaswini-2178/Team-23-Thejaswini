var students = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 28,
        "email": "johndoe@example.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "age": 34,
        "email": "janesmith@example.com"
    },
    {
        "id": 3,
        "name": "Michael Brown",
        "age": 42,
        "email": "michaelbrown@example.com"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "age": 26,
        "email": "emilydavis@example.com"
    },
    {
        "id": 5,
        "name": "David Wilson",
        "age": 30,
        "email": "davidwilson@example.com"
    }
]




function displayStudents() {
    document.querySelector('tbody').innerHTML = ""
    for (i = 0; i < students.length; i++) {
        // Create a tr
        var myTr = document.createElement("tr");
        for (a in students[i]) {
            var myTd = document.createElement("td");
            myTd.innerHTML = students[i][a]
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
displayStudents()

    function deleteUser(i) {
    console.log("deleteUser Called !!" + i);
    students.splice(i, 1);
    displayStudents()
}

function addUser() {
    var newStudent = {
        "id": document.getElementById('id').value,
        "name": document.getElementById("name").value,
        "age": document.getElementById("age").value,
        "email": document.getElementById("email").value
    }
    students.push(newStudent);
    displayStudents()
    clearForm();
}


var index = null;
function editUser(i) {
    window.location.href = "edit_user.html?"+i
    // index = i;
    // console.log("editUser Called !!!" + i);
    // document.getElementById('id').value = students[i].id;
    // document.getElementById("name").value = students[i].name;
    // document.getElementById("age").value = students[i].age;
    // document.getElementById("email").value = students[i].email;
    // document.getElementById("updateBtn").style.display = "block";
    // document.getElementById("addBtn").style.display = "none";
}



function clearForm() {
    document.getElementById('id').value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
}

function updateUser() {
    var newStudent = {
        "id": document.getElementById('id').value,
        "name": document.getElementById("name").value,
        "age": document.getElementById("age").value,
        "email": document.getElementById("email").value
    }
    students [index] = newStudent;
    displayStudents();
    clearForm();
    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "block";
}