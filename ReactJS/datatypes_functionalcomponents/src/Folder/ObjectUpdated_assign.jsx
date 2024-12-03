import React from 'react'

export default function ObjectUpdated_assign() {
    const target = { a: 1 };
    const source = { b: 2, c: 3 };
    return (<div>
    <p>Object.assign(target, source)</p>
    console.log(target)
    </div>
  )
}