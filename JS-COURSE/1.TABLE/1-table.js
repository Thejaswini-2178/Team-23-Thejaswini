var people = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 29,
        city: "New York"
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        age: 34,
        city: "San Francisco"
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        age: 28,
        city: "Los Angeles"
    },
    {
        id: 4,
        name: "Diana Prince",
        email: "diana.prince@example.com",
        age: 32,
        city: "Chicago"
    },
    {
        id: 5,
        name: "Evan Stone",
        email: "evan.stone@example.com",
        age: 45,
        city: "Houston"
    }
]


//1.we need to create the  rows which are depending the data
//2.now create the tr tags with empty 
//3.now the td tags to be creadted which is equal to the th tags(th == td tags)
//4.noe the td of data shoud be inserted in the tabledatatags 
//5.now the stored data in td tags shoud be added to the tr tag inside
//6.now calling the databy storing or appending the tr updated tags in the tablebody tag


//2.now create the tr tags with empty 
for(i=0;i<people.length;i++){
    var myTr=document.createElement("tr")

//3.now the td tags to be creadted which is equal to the th tags(th == td tags)
    for(a in people[i]){
    var myTd=document.createElement("td")

// 4.noe the td of data shoud be inserted in the tabledatatags 
    myTd.innerHTML=people[i][a]

//5.now the stored data in td tags shoud be added to the tr tag inside
    myTr.appendChild(myTd);
}

//6.now calling the databy storing or appending the tr updated tags in the tablebody tag
document.querySelector("tbody").appendChild(myTr)
}