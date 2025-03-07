const objectsArray = [
    {
        productId: 1001,
        productName: "Smartphone Pro",
        category: "Electronics",
        price: 899.99,
        stockQuantity: 50,
        manufacturer: "TechCorp",
        releaseDate: "2024-03-15",
        rating: 4.7,
        isInStock: true,
        warrantyPeriod: "2 years"
    },
    {
        productId: 1002,
        productName: "Bluetooth Headphones",
        category: "Accessories",
        price: 129.99,
        stockQuantity: 150,
        manufacturer: "SoundWave",
        releaseDate: "2024-05-20",
        rating: 4.2,
        isInStock: true,
        warrantyPeriod: "1 year"
    },
    {
        productId: 1003,
        productName: "4K Ultra HD TV",
        category: "Electronics",
        price: 1199.99,
        stockQuantity: 20,
        manufacturer: "VisionTech",
        releaseDate: "2024-01-10",
        rating: 4.8,
        isInStock: false,
        warrantyPeriod: "3 years"
    },
    {
        productId: 1004,
        productName: "Gaming Laptop",
        category: "Computers",
        price: 1599.99,
        stockQuantity: 30,
        manufacturer: "GamerGear",
        releaseDate: "2024-02-25",
        rating: 4.6,
        isInStock: true,
        warrantyPeriod: "1 year"
    },
    {
        productId: 1005,
        productName: "Electric Toothbrush",
        category: "Health & Personal Care",
        price: 89.99,
        stockQuantity: 80,
        manufacturer: "CleanTech",
        releaseDate: "2024-07-05",
        rating: 4.5,
        isInStock: true,
        warrantyPeriod: "2 years"
    },
    {
        productId: 1006,
        productName: "Air Purifier",
        category: "Home Appliances",
        price: 199.99,
        stockQuantity: 40,
        manufacturer: "CleanTech",
        releaseDate: "2024-07-05",
        rating: 4.5,
        isInStock: true,
        warrantyPeriod: "2 years"
    }];


for (i = 0; i < objectsArray.length; i++) {
    var myTableRow = document.createElement("tr")
    for (a in objectsArray[i]) {
        var myTableData = document.createElement("td")
        myTableData.innerHTML = objectsArray[i][a]
        myTableRow.appendChild(myTableData);
    }
    document.querySelector("tbody").appendChild(myTableRow)
}