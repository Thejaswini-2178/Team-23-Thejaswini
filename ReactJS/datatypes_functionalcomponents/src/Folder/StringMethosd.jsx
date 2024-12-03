import React from 'react'

export function StringMethods(){
  var str1="hii this is thejaswini"
  var str2="      hellow this this is the thejaswini iam from mpl      "
  
  return(
    <div>
      <p>{str1.length}</p>
      <p>{str2.length}</p>
      <p>{str2.trim()}</p>
      {/* <p>{str2.join(-)}</p> */}
      <p>{str1.toLocaleLowerCase()}</p>
      <p>{str1.toLocaleUpperCase()}</p>
      <p>{str2.charCodeAt(5)}</p>
      <p>{str1.charAt(12)}</p>
      <p>{str1.substring(2,5)}</p>  {/* it will gives the from index to n-1 index of str */}
      <p>subsrt:{str2.substr(12,7)}</p>
      <p>subsrt:{str2.substr(-12,7)}</p>
      <p>slice:{str1.slice(2,7)}</p>
      <p>substring:{str1.substring(2,7)}</p>
      <p>split method:{str1.split(":")}</p>
      
      <h1>split</h1>
      <p>{str1.split(' ').reverse().join(' ')}</p>
      <p>{str1.split('').reverse().join('')}</p>
      <p>{str1.split(",").reverse().join("")}</p>
      <p>{str2.split('t').length-1}</p>
      <p>{str2.split('s').length-1}</p>
      <p>{str1.split('t')}</p>
    </div>
  )
}
