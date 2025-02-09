var place = [
    {
        "sono": 1,
        "place": "kurgu",
        "city": "Karnataka",
        "country": "india"
    },
    {
        "sono": 2,
        "place": "Charminar",
        "city": "hydrabad",
        "country": "india"
    },
    {
        "sono": 3,
        "place": "Tajmahel",
        "city": "delhi",
        "country": "india"
    },
    {
        "sono": 7,
        "place": "IndianGateway",
        "city": "Mumbhai",
        "country": "india"
    }];




//step3. to write the code to add the data in tbody tage alonwith equal no .of the tr tag with data
function displayData() {
    document.querySelector("tbody").innerHTML = " "
    for (i = 0; i < place.length; i++) {
        var trow = document.createElement("tr")
        for (a in place[i]) {
            var tdata = document.createElement("td")
            tdata.innerHTML = place[i][a]
            trow.appendChild(tdata)
        }
        //step-5  adding edit button  inside the for loop
        var editTd = document.createElement("td")
        var editBut = document.createElement("button")
        editBut.innerHTML = "Edit"
        //  5.2 adding the onclick function
        editBut.setAttribute("onclick", "editData(" + i + ")")
        editTd.appendChild(editBut)
        trow.appendChild(editTd)

        //step-6 additinally we are creating the delet button
        var delBut = document.createElement("button")
        var delTd = document.createElement("td")
        delBut.innerHTML = "Delete";

        // step-7.2adding the onclick function
        delBut.setAttribute("onclick", "deletData(" + i + ")")
        delTd.appendChild(delBut)
        trow.appendChild(delTd)
        document.querySelector("tbody").appendChild(trow)
    }
}
displayData()
// step-7.1 function for delet.
//while we clicking on theonclick to delet the clicked element shoud be deleted so writing the funtion to that..
function deletData(i) {
    console.log("deleted is called.." + i);
    place.splice(i, 1); // Delete item
    displayData(); // Refresh table
}
// step-8 adding the new data in the old data table;
function addData() {
    var newData = {
        "sono": document.getElementById('sono').value,
        "place": document.getElementById('place').value,
        "city": document.getElementById('city').value,
        "country": document.getElementById('country').value,
    }
    place.push(newData); // Add new data
    displayData();
    clearForm();
}
// step-9 editing the data when we call the perticular data
var index = null;
function editData(i) {
    index = i;
    console.log("edited item is called..." + i);
    document.getElementById("sono").value = place[i].sono;
    document.getElementById("place").value = place[i].place;
    document.getElementById("city").value = place[i].city;
    document.getElementById("country").value = place[i].country;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "block";
}
// 11 step clear form function
function clearForm() {
    document.getElementById("sono").value = "";
    document.getElementById("place").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";
}

//step-10 updated data to be added to the present or old data.
function updateData() {
    let newData = {
        "sono": document.getElementById('sono').value,
        "place": document.getElementById('place').value,
        "city": document.getElementById('city').value,
        "country": document.getElementById('country').value
    };
    place[index] = newData; // Update data
    displayData();
    clearForm();
    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "block";
}
displayData();
