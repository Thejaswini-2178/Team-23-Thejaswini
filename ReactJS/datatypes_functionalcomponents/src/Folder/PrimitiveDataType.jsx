import React from 'react'

export default function PrimitiveDataType() {
    var a=10
    var b=20.3
    var c=30
    var str="this is string"
    var bool=true
    var n;
    var m=null   
  return (
    <div>
        <h1>Addition</h1>
        <p>{a+b}</p>
        <p>{str}</p>
        <p>{a*b/c}</p>
        <p>{typeof(bool)}</p>
        <p>{typeof(c)}</p>
        <p>{typeof(n)}</p>
        <p>{typeof(m)} :By defaulyt the null will return as an object type</p>
        <h2>TypeCasting</h2>
        <p>false+null:{false+null}</p>
        <p>false+srting:{false+"null"}</p>
        <p>False+null: will gives the error</p>
        <p style={{color:"blue"}}>"A"+undefined:{"A"+undefined}</p>
        <p>true+true:{true+true}</p>
        <p>null+null:{null+null}</p>
        <p>null+number:{null+10}</p>
        <p>null+string:{null+"AB"}</p>
        <p>Number+Number:{10+20}</p>
        <p>String+string:{"5"+"5"},{"hii"+"hello"}</p>
        <h3>i. NAN</h3>
        <p style={{color:"blue"}}>undefined+undefined:{undefined+undefined}</p>
        <p style={{color:"blue"}}>false+undefined:{false+undefined}</p>
        <p style={{color:"blue"}}>undefined+null:{undefined+null}</p>
        <p style={{color:"blue"}}>number+undefined:{10+undefined}</p>
        <h1>Explicit Type Casting</h1>
        <p>Number(23):{Number(23)}</p>
        <p>Number(false):{Number(false)}</p>
        <p>Number(true):{Number(true)}</p>
        <p>Number("true"){Number("true")}</p>
        <p>Number("true"):{Number("true")}</p>
        <p>Number("23"):{Number("23")}</p>
        <p>Number("hi"):{Number("hi")}</p>
        <p>Number(prompt):{Number(prompt)}</p>

    </div>
  )
}
