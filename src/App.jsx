import React from 'react'
import Usestate from './component/Usestate'
import Usestate1 from './component/Usestate1'
import Props from './component/Props'
import Button from './component/Button'
import Practice from './component/practice'

export default function App() {
  return (
    <div>
      <Usestate />
      <Usestate1 />
      <Props name={"Matthew"} age={35} size={60} />
      <Props name={"Lovely"} age={60} />
      <Button name={"Lovely"} color={"blue"} age={24} height={50} />
      <Button name={"Precious"} color={"Green"} age={27} height={50}  />
      <Practice />
    </div>
  )
}

