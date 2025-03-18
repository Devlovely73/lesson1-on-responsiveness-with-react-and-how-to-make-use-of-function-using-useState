import { useState } from "react";


export default function Practice() {
const[color, setColor] = useState("yellow");

  return (
    <main>my favorite color is {color}</main>
  )
}

