import React, { useState } from 'react'



export default function Usestate1() {
  const [age, setName] = useState("nma");
  
  const changeName = () => {
    setName("happy");
  }

 
  return (
    <>
      <button onClick={changeName} className='change'>change Name</button>
  
<nav className='flex'> Home
  <a href="">find</a>
    <a href="">info</a>
    <a href="">| Cart</a>
    <a href="">contact</a>
</nav>
    </>
  )
}
