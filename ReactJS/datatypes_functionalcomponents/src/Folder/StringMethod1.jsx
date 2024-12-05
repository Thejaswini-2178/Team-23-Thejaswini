import React from 'react'

function StringMethod1() {
    const str = "Hellow-world"
    const pal = "hhllow"
    
    return (
        <div>
            <h3>Reverseing th enumber</h3>
            <p>{str.split("-").reverse().join(" ")}</p>
            <h3>Plandrome or not</h3>
            <p>{pal.split("").reverse().join("") === pal ? "true" : "false"}</p>
            <h3>Removing duplicate ones</h3>
            <p>{pal.split("").filter((char, i) => pal.indexOf(char) == i)}</p>
            <h3>Non-repeating character</h3>
            <p>
                {
                    (() => {
                        const charCount = {}
                        pal.split("").forEach((val) => charCount[val] = (charCount[val] || 0) + 1)
                        return pal.split("").find((val) => charCount[val] === 1)
                    })()
                }
            </p>
            <h3>Substring without using the substring</h3>
            <p>{
                (() => {
                    var count = 0
                    pal.trim().split("").forEach(char => {
                        if (char !== " ") {
                            count++
                        }
                    })
                    return count;
                })()
            }
            </p>
            <h3>if two str are anagrams</h3>
            <p>
                {
                    (()=>{
                        var word1="listen"
                        var word2="silent"
                        const normal=(str)=>{
                            str.toLowerCase().split("").sort().join("")
                        }
                        return normal(word1)===normal(word2)?"Anagram":"Not Anogram"
                    })()
                }
            </p>
        </div>
    )
}

export default StringMethod1
