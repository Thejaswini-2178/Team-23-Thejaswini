var myObject = 
[
    {
        "product_id": "P001",
        "product_name": "Wireless Mouse",
        "price": 25.99,
        "category": "Electronics"
    },
    {
        "product_id": "P002",
        "product_name": "Bluetooth Headphones",
        "price": 89.95,
        "category": "Electronics"
    },
    {
        "product_id": "P003",
        "product_name": "Office Chair",
        "price": 159.99,
        "category": "Furniture"
    },
    {
        "product_id": "P004",
        "product_name": "Gaming Keyboard",
        "price": 45.50,
        "category": "Electronics"
    },
    {
        "product_id": "P005",
        "product_name": "Smartwatch",
        "price": 199.99,
        "category": "Electronics"
    },
    {
        "product_id": "P006",
        "product_name": "Desk Lamp",
        "price": 34.75,
        "category": "Furniture"
    },
    {
        "product_id": "P007",
        "product_name": "Blender",
        "price": 89.90,
        "category": "Appliances"
    },
    {
        "product_id": "P008",
        "product_name": "Coffee Maker",
        "price": 49.99,
        "category": "Appliances"
    },
    {
        "product_id": "P009",
        "product_name": "Air Purifier",
        "price": 129.99,
        "category": "Appliances"
    },
    {
        "product_id": "P010",
        "product_name": "Ergonomic Chair",
        "price": 225.00,
        "category": "Furniture"
    }
]

for(i=0;i<myObject.length;i++){
    var rows=document.createElement("tr")//4 no of rows will created
    for(a in myObject[i]){
        // the data in rows 
        var tableData=document.createElement("td")//tabledata is created>. now we have to insert this tabledata in td elements
        tableData.innerHTML=myObject[i][a]
        rows.appendChild(tableData)                    
    }
    document.querySelector("tbody").appendChild(rows)
}