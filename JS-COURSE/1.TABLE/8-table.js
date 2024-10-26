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
]
for(i=0;i<data.length;i++){
    var myTr=document.createElement("tr")//creating the rows
    for (a in data[i]){//elements present in datamonitoring
        var myTd=document.createElement("td")//
        myTd.innerHTML=data[i][a]
        myTr.appendChild(myTd)
    }
    document.querySelector("tbody").appendChild(myTr)
}
