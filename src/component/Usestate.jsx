import React from 'react'
import { useState } from 'react';
import Usestate1 from './Usestate1';



function Usestate() {
    // const [age, setAge] = useState(15)
    // function changeAge () {
    //     setAge(19);
    // }
    const [isMenuOpen, setIsMenuOpen] = useState('false');
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <div>
            {/* <p>i am Matthew and i am {age} years old</p>
            <button onClick={changeAge}>click me</button> */}
    <nav className='flex'>
        <p>ADA</p>
        {/* <ul className='flex text-decoration sm ul'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul> */}

        <button className='image' onClick={toggleMenu}>
           click me
        </button>

        {isMenuOpen ? (
             <ul className='flex text-decoration sm'>
             <li>Home</li>
             <li>Home</li>
             <li>Home</li>
             <li>Home</li>
         </ul>
        ): null}
    </nav>

    </div>
  )
}

export default Usestate1