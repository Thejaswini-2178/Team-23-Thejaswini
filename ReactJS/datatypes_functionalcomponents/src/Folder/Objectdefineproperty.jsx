import React from 'react'

function Objectdefineproperty() {
    const obj = {};
    Object.defineProperty(obj, "key", {
        value: "Hello",
        writable: true,
    });
    return (
        <div>
            <p>console.log(obj.key)</p>
            <p>obj.key = "World"</p>
            <p>console.log(obj.key) </p>
        </div>
    )
}

export default Objectdefineproperty