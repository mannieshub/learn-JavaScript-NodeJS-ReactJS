import React from 'react'
import {Header,Content,Footer} from './func-components'
import Calendar from './class-component'
import MsgBox from './class-prop'

function App(){
  return(
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>

      <MsgBox
      text="React & React Native"
      color="blue"
      bgColor="#c45"
      fontSize="18pt"
      border="solid 1px black"
      />
    </>

  )
 
}

export default App