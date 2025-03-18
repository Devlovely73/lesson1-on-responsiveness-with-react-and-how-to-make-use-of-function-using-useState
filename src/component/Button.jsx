import React from 'react'

function Button({name, color, age, height}) {
  return (
    <div>
        <button style={{color: color, age, height}}>{name}</button>
    </div>
  )
}

export default Button