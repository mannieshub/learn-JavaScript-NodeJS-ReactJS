import React from 'react'
import { userContext } from './context'
import Header from './context-header'
import Content from './context-content'
import Header2 from './context-header2'

export default function App(){
  let [user,setUser] = React.useState()
  return (
    <userContext.Provider value={[user,setUser]}>
      <Header/>
      <Content/> 
      <Header2/>
    </userContext.Provider>
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