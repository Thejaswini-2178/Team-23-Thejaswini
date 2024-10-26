1// Change background color
function background() {
    var backgroundColor = document.getElementById('para');
    backgroundColor.style.backgroundColor = "yellow";
    backgroundColor.style.color = "green";
}
background();


2// Get selected gender
function className(event) {
    event.preventDefault(); // Prevent form submission
    var classElement = document.getElementsByClassName("gender");
    for (var i = 0; i < classElement.length; i++) {
        if (classElement[i].checked) {
            document.getElementById("divmain").textContent = "Selected Gender: " + classElement[i].value;
            break;
        }
    }
}
2// Attach the function to the button click
document.getElementById("submit").addEventListener("click", className);



3// getting the elemnt by the qury selector
function displayData(){
    var content=document.querySelector("h1");
    var button=document.getElementById("buttonBtn")
    getElementById("buttonBtn").addEventListener("click",displayData)
}


function checkbox(){
    var chang=document.querySelectorAll("form")
    change.style.backgroundColor="gray"
    var element=document.getElementsByClassName("")

}