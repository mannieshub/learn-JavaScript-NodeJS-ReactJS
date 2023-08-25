import React, { createRef } from 'react'

export default class RefsClass extends React.Component{

    num1 = createRef()
    num2 = createRef()
    operator = React.createRef()
    result = React.createRef()

    calculate = (ev) =>{

        let op = ev.target.innerText
        let n1 = parseInt(this.num1.current.innerText)
        let n2 = parseInt(this.num2.current.innerText)
        let r = eval(`${n1} ${op} ${n2}`)
        this.result.current.innerText = r
        this.operator.current.innerText = op
    }

    render(){
        return(
            <div style ={{textAlign:'center',marginTop:20,fontSize:18}}>
                <span ref = {this.num1}>15</span>&nbsp;
                <span ref = {this.operator}>?</span>&nbsp;
                <span ref = {this.num2}>5</span>&nbsp;
                
                <span>=</span>&nbsp;
                <span ref = {this.result}>?</span>&nbsp;
                <div>
                    <button onClick = {this.calculate}>+</button>&nbsp;
                    <button onClick = {this.calculate}>-</button>&nbsp;
                    <button onClick = {this.calculate}>*</button>&nbsp;
                    <button onClick = {this.calculate}>/</button>
                </div>
            </div> 
        )
    }
}