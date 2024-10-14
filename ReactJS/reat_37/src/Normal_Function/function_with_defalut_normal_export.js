import React from "react"
function UseDefault(){
    return <div>
        <h1>ONE DEFAULT</h1>
        <ul>
            <li>using only one defalult function name export</li>
            <li>INn same file using the more than two normal exports</li>
            <li>This can be don in normal function</li>
        </ul>
    </div>
}
 export function NormalExport1(){
    return <div>
        <h1>One defalult and more normal  xports </h1>
        <ul>
            <li>using only one defalult function name export</li>
            <li>INn same file using the more than two normal exports</li>
            <li>This can be don in normal function</li>
        </ul>
    </div>
}
 export function NormalExport2(){
    return <div>
        <h1>One defalult and more normal  exports </h1>
        <ul>
            <li>using only one defalult function name export</li>
            <li>INn same file using the more than two normal exports</li>
            <li>This can be don in normal function</li>
        </ul>
    </div>
}
export default UseDefault
