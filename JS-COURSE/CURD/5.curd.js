// <!-- step-1 to create an object -->
    var myFruit = [

        {
            "name": "Apple",
            "color": "Red",
            "type": "Fruit"
        },
        {
            "name": "Carrot",
            "color": "Orange",
            "type": "Vegetable"
        },
        {
            "name": "Notebook",
            "color": "Blue",
            "type": "Stationery"
        },
        {
            "name": "Shirt",
            "color": "White",
            "type": "Clothing"
        },
        {
            "name": "Pen",
            "color": "Black",
            "type": "Stationery"
        },
        {
            "name": "Dog",
            "color": "Brown",
            "type": "Animal"
        },
        {
            "name": "Chair",
            "color": "Green",
            "type": "Furniture"
        },
        {
            "name": "Laptop",
            "color": "Silver",
            "type": "Electronics"
        },
        {
            "name": "Orange",
            "color": "Orange",
            "type": "Fruit"
        },
        {
            "name": "Table",
            "color": "Wooden",
            "type": "Furniture"
        }
    ]

    // step-2 displaying the data in table so create a function
    function displaydata() {
        document.querySelector("tbody").innerHTML = ""
        for (var i = 0; i < myFruit.length; i++) {                                                 //from 0 to length of myfruit (i.e each item upt last item in the my fruit) will incrementg 1 by one wii be monitorng
            var myTr = document.createElement("tr")                                                //trow is created
            for (var a in myFruit[i]) {                                                            //items in my fruit of each item will takes
                var myTd = document.createElement("td")                                            //td is created
                myTd.innerHTML = myFruit[i][a]                                                     //item of each value in myfruit will store in my td
                myTr.appendChild(myTd)
            }
            //  step-3 edit the table data
            var editTd = document.createElement("td")                                                //edit td is created
            var editBTN = document.createElement("button")                                           //button created
            editBTN.innerHTML = "Edit"                                                                 //button is changed with the Edit text
            editBTN.setAttribute("onclick", "editUser(" + i + ")")                                        //setting the onclick attrinute                     
            editTd.appendChild(editBTN)                                                              //edit button is added to td
            myTr.appendChild(editTd)                                                                 //then to tr
            document.querySelector("tbody").appendChild(myTr)                                        //then to tbody

            // step-4 delt  button created
            var delTd = document.createElement("td")                                                 //del td is created
            var delBTN = document.createElement("button")                                            //button created
            delBTN.innerHTML = "Delete"                                                                //button is changed with the del text
            delBTN.setAttribute("onclick", "deleteUser(" + i + ")")                                         //seitng onclick attribute
            delTd.appendChild(delBTN)                                                                //del button is added to td
            myTr.appendChild(delTd)                                                                  //then to tr
            document.querySelector("tbody").appendChild(myTr)                                        //then to tbody
        }
    }
    displaydata()
   // step-6 function for the edit befor we need to add onclick function,it just only displaying the data
    var index = null;
    function editUser(i) {
        index = i
        console.log("Edituser is called the index of " + i)                                          // when it is called then it will dispaly on the table
        document.getElementById("name").value = myFruit[i].name;                                     //taking the element with idwith value of my fruit with the indexof correct value
        document.getElementById("color").value = myFruit[i].color;
        document.getElementById("type").value = myFruit[i].type;

        document.getElementById("update").style.display = "block"
        document.getElementById("add").style.display="none"
    }
    //  step-7 delet function called
    function deleteUser(i){
        myFruit.splice(i,1)
        console.log("delet user is of "+i)
        displaydata()
    }

    // step-8 create a clerform
    function clearFom(){                          
    document.getElementById("name").value=""      //clearing the previous data
    document.getElementById("color").value=""                             
    document.getElementById("type").value=""
 }

//step-9 function for updating 
  function updateUser(){
       var newData={
        "name":document.getElementById("name").value,
        "color":document.getElementById("color").value,
        "type":document.getElementById("type").value,
    }
    myFruit[index]=newData                 //this is assigning the new data withe a specific possition,by linlking the newUser{}^,
    displaydata()
    clearFom()
    document.getElementById("update").style.display = "none"
    document.getElementById("add").style.display="block"
}

//  step-10 add function doing 
function addUser(){
    var myaddData={
        "name":document.getElementById("name").value,
        "color":document.getElementById("color").value,
        "type":document.getElementById("type").value,
    }
    myFruit.push(myaddData)
    displaydata()
    clearFom()
}




