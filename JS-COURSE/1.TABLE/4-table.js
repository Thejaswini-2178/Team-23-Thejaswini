var objectsArray = [
    { id: 1, productName: "Laptop", price: 999.99 },
    { id: 2, productName: "Smartphone", price: 699.99 },
    { id: 3, productName: "Tablet", price: 399.99 },
    { id: 4, productName: "Smartwatch", price: 199.99 },
    { id: 5, productName: "Headphones", price: 149.99 },
    { id: 6, productName: "Keyboard", price: 79.99 },
    { id: 7, productName: "Mouse", price: 29.99 },
    { id: 8, productName: "Monitor", price: 249.99 },
    { id: 9, productName: "Printer", price: 119.99 },
    { id: 10, productName: "Webcam", price: 89.99 },
    { id: 11, productName: "External Hard Drive", price: 129.99 },
    { id: 12, productName: "USB Flash Drive", price: 19.99 },
    { id: 13, productName: "Router", price: 59.99 },
    { id: 14, productName: "Speaker", price: 89.99 },
    { id: 15, productName: "Microphone", price: 109.99 },
    { id: 16, productName: "Desk Lamp", price: 39.99 },
    { id: 17, productName: "Printer Ink", price: 34.99 },
    { id: 18, productName: "Camera", price: 499.99 },
    { id: 19, productName: "Drone", price: 799.99 },
    { id: 20, productName: "VR Headset", price: 299.99 }
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