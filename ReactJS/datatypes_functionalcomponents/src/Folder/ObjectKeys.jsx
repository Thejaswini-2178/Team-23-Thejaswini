import React from 'react'

function ObjectKeys() {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(obj);
  return (
    <div>
    <p>console.log(keys)</p>
    </div>
  )
}

export default ObjectKeys