var objectsArray = [
    { employeeId: 101, name: "Alice Johnson" },
    { employeeId: 102, name: "Bob Smith" },
    { employeeId: 103, name: "Charlie Davis" },
    { employeeId: 104, name: "Diana Evans" },
    { employeeId: 105, name: "Ethan White" },
    { employeeId: 106, name: "Fiona Green" },
    { employeeId: 107, name: "George Brown" },
    { employeeId: 108, name: "Hannah Lee" },
    { employeeId: 109, name: "Ian Turner" },
    { employeeId: 110, name: "Jessica Adams" },
    { employeeId: 111, name: "Kevin Martin" },
    { employeeId: 112, name: "Laura Wilson" },
    { employeeId: 113, name: "Mike Taylor" },
    { employeeId: 114, name: "Nina Anderson" },
    { employeeId: 115, name: "Oliver Thompson" },
    { employeeId: 116, name: "Paula Clark" },
    { employeeId: 117, name: "Quentin Rodriguez" },
    { employeeId: 118, name: "Rachel Lewis" },
    { employeeId: 119, name: "Sam Walker" },
    { employeeId: 120, name: "Tina Hall" }
];

for (i = 0; i < objectsArray.length; i++) {
var myTableRow = document.createElement("tr")
for (a in objectsArray[i]) {
    var myTableData = document.createElement("td")
    myTableData.innerHTML = objectsArray[i][a]
    myTableRow.appendChild(myTableData);
}
document.querySelector("tbody").appendChild(myTableRow)
}