import React from 'react'

function Objectsetstate() {
    const proto = { greet: "Hi" }
    const obj = { name: "Thejaswini" }
    return (<div>
        <p>Object.setPrototypeOf(obj, proto)</p>
        <p>console.log(obj.greet)</p>
    </div>
    )
}

export default Objectsetstate