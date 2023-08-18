import React from 'react'
// import {Header,Content,Footer} from './func-components'
// import Calendar from './class-component'
// import MsgBox from './class-prop'

import Banner from './banner'
import Button from './class-component'
import { Calculator2 } from './calculator'

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

function App(){
  return(
    <>
      <Banner/>
      <Calculator2/>
    </>
  ) 
}

export default App