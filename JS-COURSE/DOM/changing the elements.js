document.getElementById("div1").style.border="4px solid blue"
var items=document.getElementsByTagName("li")
for(i=0;i<=items.length;i++){
    items[i].style.background="yellow";
    items[i].style.padding="10px";
    items[i].style.margin="10px";
    items[i].style.width="120px";
    items[i].style.color="red"

    items[i].innerHTML="content changed"
    document.querySelector("ul").onclick=function(click){
        console.log(click.target)
        var clickedElement=click.target

        // removed the element

        document.querySelector("ul").removeChild(clickedElement)
        // replasing the element
        document.querySelector("ul").onclick=function(modify){
            var modifiedElement=modify.target
            var newElement=document.createElement("p")
            newElement.innerHTML="u clicked to change"
            document.querySelector("ul").replaceChild(newElement,modifiedElement)
            var e=replaceChild(newElement,modifiedElement)
            for(j=0;j<=newElement.length;i++){
                newElement[i].style.color="red"
                newElement[i].style.background="gray"
                newElement[i].style.padding="10px"
                newElement[i].style.margin="10px"
                newElement[i].style.width="150px"
            }
        }
        
    }
}
