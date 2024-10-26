var listOfPlace=[
    {
        sno:"1",
        place:"kurgu",
        city:"Karnataka",
        country:"india"
    },
    {
        sno:"2",
        place:"Charminar",
        city:"hydrabad",
        country:"india"   
    },
    {
        sno:"3",
        place:"Tajmahel",
        city:"delhi",
        country:"india"
    },
    {
        sno:"4",
        place:"balaji temple",
        city:"Tirumala Tirupath",
        country:"india"
    },
    {
        sno:"5",
        place:"ooty",
        city:"kerala",
        country:"india"
    },
    {
        sno:"6",
        place:"SHiridiBabha",
        city:"Shiridi",
        country:"india"
    },
    {
        sno:"7",
        place:"IndianGateway",
        city:"Mumbhai",
        country:"india"
    },
]
for(i=0;i<listOfPlace.length;i++){
    var tr=document.createElement("tr")
    for(a in listOfPlace[i]){
        var td=document.createElement("td")
        td.innerHTML=listOfPlace[i][a]
        tr.appendChild(td)
    }
    document.querySelector("tbody").appendChild(tr)
}