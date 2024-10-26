var students = [
    {
        id: 1,
        name: "Alice Johnson",
        branch: "Computer Science",
        year: 2,
        section: "A"
    },
    {
        id: 2,
        name: "Bob Smith",
        branch: "Mechanical Engineering",
        year: 3,
        section: "B"
    },
    {
        id: 3,
        name: "Catherine Lee",
        branch: "Electrical Engineering",
        year: 1,
        section: "C"
    },
    {
        id: 4,
        name: "David Brown",
        branch: "Civil Engineering",
        year: 4,
        section: "A"
    },
    {
        id: 5,
        name: "Emily Davis",
        branch: "Chemical Engineering",
        year: 2,
        section: "B"
    },
    {
        id: 6,
        name: "Frank Martinez",
        branch: "Architecture",
        year: 3,
        section: "C"
    },
    {
        id: 7,
        name: "Grace Wilson",
        branch: "Biotechnology",
        year: 1,
        section: "A"
    }
];

function addUser() {
var newStudent = {
    "id": document.getElementById('id').value,
    "name": document.getElementById("name").value,
    "branch": document.getElementById("branch").value,
    "year": document.getElementById("year").value,
    "section": document.getElementById("section").value
}
students.push(newStudent);
displayStudents()
clearForm();
}


function addUser() {
var newStudent = {
    "id": document.getElementById('id').value,
    "name": document.getElementById("name").value,
    "branch": document.getElementById("branch").value,
    "year": document.getElementById("year").value,
    "section": document.getElementById("section").value

}
students.push(newStudent);
displayStudents()
clearForm();
}

function clearForm() {
document.getElementById('id').value = "";
document.getElementById("name").value = "";
document.getElementById("branch").value = "";
document.getElementById("year").value = "";
document.getElementById("section").value = "";

}
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
var index = null;
function editUser(i) {
index = i;
console.log("editUser Called !!!" + i);

document.getElementById('id').value = students[i].id;
document.getElementById("name").value = students[i].name;
document.getElementById("branch").value = students[i].branch;
document.getElementById("year").value = students[i].year;
document.getElementById("section").value = students[i].section;

document.getElementById("updateBtn").style.display = "block";
document.getElementById("addBtn").style.display = "none";

}

function deleteUser(i) {
console.log("deleteUser Called !!" + i);
students.splice(i, 1);
displayStudents()
}

function updateUser() {
var newStudent = {
    "id": document.getElementById('id').value,
    "name": document.getElementById("name").value,
    "branch": document.getElementById("branch").value,
    "year": document.getElementById("year").value,
    "section": document.getElementById("section").value
}
students [index] = newStudent;
displayStudents();
clearForm();
document.getElementById("updateBtn").style.display = "none";
document.getElementById("addBtn").style.display = "block";
}


