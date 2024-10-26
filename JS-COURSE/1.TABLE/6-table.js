var objectsArray = [
    {
        id: 1,
        title: "Conference Room",
        location: "Building A, Floor 2",
        capacity: 20,
        hasProjector: true,
        isAvailable: true,
        bookingStart: "2024-08-01T09:00:00Z",
        bookingEnd: "2024-08-01T17:00:00Z",
        manager: "Alice Johnson",
        contactNumber: "+1234567890"
    },
    {
        id: 2,
        title: "Executive Suite",
        location: "Building B, Floor 5",
        capacity: 10,
        hasProjector: true,
        isAvailable: false,
        bookingStart: "2024-08-02T10:00:00Z",
        bookingEnd: "2024-08-02T15:00:00Z",
        manager: "Bob Smith",
        contactNumber: "+1234567891"
    },
    {
        id: 3,
        title: "Open Space",
        location: "Building C, Floor 1",
        capacity: 50,
        hasProjector: false,
        isAvailable: true,
        bookingStart: "2024-08-03T08:00:00Z",
        bookingEnd: "2024-08-03T18:00:00Z",
        manager: "Charlie Davis",
        contactNumber: "+1234567892"
    },
    {
        id: 4,
        title: "Training Room",
        location: "Building D, Floor 3",
        capacity: 15,
        hasProjector: true,
        isAvailable: true,
        bookingStart: "2024-08-04T09:00:00Z",
        bookingEnd: "2024-08-04T16:00:00Z",
        manager: "Diana Evans",
        contactNumber: "+1234567893"
    },
    {
        id: 5,
        title: "Breakout Area",
        location: "Building E, Floor 4",
        capacity: 30,
        hasProjector: false,
        isAvailable: false,
        bookingStart: "2024-08-05T11:00:00Z",
        bookingEnd: "2024-08-05T14:00:00Z",
        manager: "Ethan White",
        contactNumber: "+1234567894"
    },
    {
        id: 6,
        title: "Meeting Pod",
        location: "Building F, Floor 6",
        capacity: 5,
        hasProjector: false,
        isAvailable: true,
        bookingStart: "2024-08-06T12:00:00Z",
        bookingEnd: "2024-08-06T13:00:00Z",
        manager: "Fiona Green",
        contactNumber: "+1234567895"
    },
    {
        id: 7,
        title: "Boardroom",
        location: "Building G, Floor 7",
        capacity: 12,
        hasProjector: true,
        isAvailable: true,
        bookingStart: "2024-08-07T14:00:00Z",
        bookingEnd: "2024-08-07T17:00:00Z",
        manager: "George Brown",
        contactNumber: "+1234567896"
    },
    {
        id: 8,
        title: "Reception Area",
        location: "Building H, Floor 1",
        capacity: 25,
        hasProjector: false,
        isAvailable: true,
        bookingStart: "2024-08-08T09:00:00Z",
        bookingEnd: "2024-08-08T11:00:00Z",
        manager: "Hannah Lee",
        contactNumber: "+1234567897"
    },
    {
        id: 9,
        title: "Innovation Lab",
        location: "Building I, Floor 3",
        capacity: 40,
        hasProjector: true,
        isAvailable: false,
        bookingStart: "2024-08-09T10:00:00Z",
        bookingEnd: "2024-08-09T16:00:00Z",
        manager: "Ian Turner",
        contactNumber: "+1234567898"
    },
    {
        id: 10,
        title: "Event Hall",
        location: "Building J, Floor 2",
        capacity: 100,
        hasProjector: true,
        isAvailable: true,
        bookingStart: "2024-08-10T08:00:00Z",
        bookingEnd: "2024-08-10T20:00:00Z",
        manager: "Jessica Adams",
        contactNumber: "+1234567899"
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