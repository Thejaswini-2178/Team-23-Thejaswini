var objectsArray = [
    {
        id: 1,
        name: "Object1",
        type: "TypeA",
        value: 100,
        isActive: true,
        createdAt: "2024-01-01T10:00:00Z"
    },
    {
        id: 2,
        name: "Object2",
        type: "TypeB",
        value: 200,
        isActive: false,
        createdAt: "2024-01-02T11:00:00Z"
    },
    {
        id: 3,
        name: "Object3",
        type: "TypeC",
        value: 300,
        isActive: true,
        createdAt: "2024-01-03T12:00:00Z"
    },
    {
        id: 4,
        name: "Object4",
        type: "TypeA",
        value: 400,
        isActive: false,
        createdAt: "2024-01-04T13:00:00Z"
    },
    {
        id: 5,
        name: "Object5",
        type: "TypeB",
        value: 500,
        isActive: true,
        createdAt: "2024-01-05T14:00:00Z"
    },
    {
        id: 6,
        name: "Object6",
        type: "TypeC",
        value: 600,
        isActive: false,
        createdAt: "2024-01-06T15:00:00Z"
    }
];
function userData() {
    document.querySelector("tbody").innerHTML = ""
    for (var i = 0; i < objectsArray.length; i++) {
        var myRow = document.createElement('tr')
        for (a in objectsArray[i]) {
            var myData = document.createElement("td")
            myData.innerHTML = objectsArray[i][a]
            myRow.appendChild(myData)
        }

        var editBTN = document.createElement("button")
        var editTd = document.createElement("td")
        editBTN.innerHTML = "Edit"
        editBTN.setAttribute("onclick", "editBUTCalled(" + i + ")")
        editTd.appendChild(editBTN)
        myRow.appendChild(editTd)

        var delBTN = document.createElement("button")
        var delTd = document.createElement("td")
        delBTN.innerHTML = "Delet"
        delBTN.setAttribute("onclick", "deletBUTCalled(" + i + ")")
        delTd.appendChild(delBTN)
        myRow.appendChild(delTd)
        document.querySelector('tbody').appendChild(myRow)
    }
}
userData()
function deletBUTCalled(i) {
    console.log("delet button called" + i)
    objectsArray.splice(i, 1)
    userData()
}

function addUser() {
    var newData = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        value: document.getElementById("value").value,
        isActive: document.getElementById("isActive").value.toLowerCase() === "true",
        createdAt: document.getElementById("createdAt").value,
    }
    objectsArray.push(newData)
    userData()
}

var index = null
function editBUTCalled(i) {
    index=i
    console.log("Edit button called" + i)
    document.getElementById("id").value =objectsArray [i].id;
    document.getElementById("name").value =objectsArray [i].name;
    document.getElementById("type").value =objectsArray [i].type;
    document.getElementById("value").value =objectsArray [i].value;
    document.getElementById("isActive").value =objectsArray [i].isActive; // Fixed ID
    document.getElementById("createdAt").value =objectsArray [i].createdAt;
    document.getElementById("updateBtn").style.display = "inline";
    document.getElementById("add").style.display = "none";
    // userData()
}
function clearForm() {
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("type").value = ""
    document.getElementById("value").value = ""
    document.getElementById("isActive").value= ""
    document.getElementById("createdAt").value= ""
}
userData()

function updateUser(){
    var newData={
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "type": document.getElementById("type").value,
        "value": document.getElementById("value").value,
        "isActive": document.getElementById("isActive").value.toLowerCase() === "true",
        "createdAt": document.getElementById("createdAt").value,
    }
    objectsArray[index] = newData
    userData()
    clearForm()
    document.getElementById("updateUser").style.display = "none" + "<br>"
    document.getElementById("addBtn").style.display = "block" + "<br>"
}