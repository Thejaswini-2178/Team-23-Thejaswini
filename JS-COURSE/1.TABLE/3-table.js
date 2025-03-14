var objectsArray = [
    {
        id: 1,
        title: "Book One",
        author: "Author A",
        pages: 300,
        isAvailable: true,
        publicationDate: "2023-06-15"
    },
    {
        id: 2,
        title: "Book Two",
        author: "Author B",
        pages: 250,
        isAvailable: false,
        publicationDate: "2022-09-10"
    },
    {
        id: 3,
        title: "Book Three",
        author: "Author C",
        pages: 400,
        isAvailable: true,
        publicationDate: "2021-12-01"
    },
    {
        id: 4,
        title: "Book Four",
        author: "Author D",
        pages: 150,
        isAvailable: true,
        publicationDate: "2024-01-05"
    },
    {
        id: 5,
        title: "Book Five",
        author: "Author E",
        pages: 500,
        isAvailable: false,
        publicationDate: "2023-03-22"
    },
    {
        id: 6,
        title: "Book Six",
        author: "Author F",
        pages: 220,
        isAvailable: true,
        publicationDate: "2022-08-18"
    },
    {
        id: 7,
        title: "Book Seven",
        author: "Author G",
        pages: 350,
        isAvailable: false,
        publicationDate: "2021-11-25"
    },
    {
        id: 8,
        title: "Book Eight",
        author: "Author H",
        pages: 270,
        isAvailable: true,
        publicationDate: "2024-02-20"
    },
    {
        id: 9,
        title: "Book Nine",
        author: "Author I",
        pages: 330,
        isAvailable: false,
        publicationDate: "2023-07-30"
    },
    {
        id: 10,
        title: "Book Ten",
        author: "Author J",
        pages: 180,
        isAvailable: true,
        publicationDate: "2022-10-10"
    }
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