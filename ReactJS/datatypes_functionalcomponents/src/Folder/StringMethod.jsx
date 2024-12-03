import React from 'react';

function Str1() {
    var str = "hellow_world";
    var palan="hellow"
    var char="javascript"
    return (
        <div>
            <p>{str.split("_").reverse().join(" ")}</p>
            <p>{palan.split("").reverse().join("")===palan?"true":"false"}</p>
            <h1>finding th emost frequent character</h1>
            <p></p>
            <h2>Removing  th eduplicate characters</h2>
            <p>{char.split("").filter().indexOf()}</p>
        </div>
    );
}

export default Str1;
