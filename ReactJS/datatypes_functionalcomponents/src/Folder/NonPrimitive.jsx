import React from 'react'

// function expresson method
var FuncName= function name(){
    var str1="Hii this is theju iam from..."
    var str2="       hii hellow       "
    return(
        <div>
            <h1>Non Primitive Datatypes</h1>
            <h2>String Data types</h2>
            <p>Length of the string: {str1.length}</p>
            <p>{str2}</p>
            <p>trim of the sting:{str2.trim()}</p>
            <p>converting this into lower: {str1.toLowerCase()}</p>
            <p>converting this into lower: {str1.toUpperCase()}</p>
            <p>CharCode:{str1.charCodeAt(0)}</p>
            <p>charat:{str1.charAt(7)}</p>
            <p>join:{str1.join("-")}</p>
        </div>
    )
}
export default FuncName



