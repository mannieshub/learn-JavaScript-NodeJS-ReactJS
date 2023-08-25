import React from 'react'
// import {Header,Content,Footer} from './func-components'
// import Calendar from './class-component'
// import MsgBox from './class-prop'

import RefsClass from './ref-class'
import RefsFunc from './refs-func'
import RefsArray from './refs-array'


export default function App(){
  return (
    <>
    <center><h1>Refs Class</h1></center>
    <RefsClass/>
    <center><h1>Refs Func</h1></center>
    <RefsFunc/>
    <center><h1>Refs Array</h1></center>
    <RefsArray/>
    </>
  )
}




























// import Banner from './banner'
// import Button from './class-component'
// import { Calculator2 } from './calculator'
// import { EventData1, EventData2 } from './eventdata'

// 11/08/2566
// function App(){
//   return(
//     <>
//       <Header/>
//       <p><center><Calendar/></center></p>
//       <Content/>
//       <Footer/>

//       <MsgBox
//       text="React & React Native"
//       color="blue"
//       bgColor="#c45"
//       fontSize="18pt"
//       border="solid 1px black"
//       />
//     </>
//   )
// }

// function App(){
//   return(
//     <>
//       <Banner/>
//       <Calculator2/>
//       <EventData1/>
//       <EventData2/>
//     </>
//   ) 
// }