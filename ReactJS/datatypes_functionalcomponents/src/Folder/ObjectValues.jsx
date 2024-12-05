import React from 'react'

function ObjectValues() {
    const obj = { a: 1, b: 2, c: 3 };
    const values = Object.values(obj);
  return (
    <div>
        <p>console.log(values)</p>
    </div>
  )
}
export default ObjectValues