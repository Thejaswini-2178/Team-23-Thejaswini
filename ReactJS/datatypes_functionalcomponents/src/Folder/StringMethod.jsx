import React from 'react';

function Str1() {
    var str = "hellow_world";
    var palan="hellow"
    const char="javascript"
    var word="swiss"
    return (
        <div>
            <p>{str.split("_").reverse().join(" ")}</p>
            <p>{palan.split("").reverse().join("")===palan?"true":"false"}</p>
            <h1>Removing the duplicate characteristics</h1>
            <p>{char.split("").filter((val,i)=>char.indexOf(val)===i).join("")}</p>
            <h2>Now finding the first non repeating character</h2>
            <p>
                {
                    (()=>{
                         const charCount={};
                         word.split("").forEach(val=>charCount[val]=(charCount[val]||0)+1);
                         return word.split("").find(char=>charCount[char]===1)
                    })()
                }
            </p>
            <h2>Most frequently appering character</h2>
            <h2>Palndrome or not</h2>
            <p>{
                (()=>{
                    const a="madam";
                    const b="hello";
                    return (a.split("").reverse().join("")===a?"true":"false")
                })()
                }
            </p>
            <h3>String appears in count</h3>
            <p>{str.split("").filter((val,i)=>val===i).length}</p>
           
        </div>
    );
}
export default Str1;
