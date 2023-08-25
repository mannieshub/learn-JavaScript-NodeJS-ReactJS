import React,{useRef}from 'react'

export default function RefsFunc(){
    const num1 = useRef()
    const num2 = useRef()
    const operator = React.useRef()
    const result = React.useRef()

    const calculate = (ev) =>{
        let op  = ev.target.innerText
        let n1 =  parseInt(num1.current.innerText)
        let n2 = parseInt(num2.current.innerText)
        let r = eval(`${n1} ${op} ${n2}`)

        result.current.innerText = r
        operator.current.innerText = op

        
    }

    return(
        <div style={{textAlign:'center',marginTop:20,fontSize:18}}>
            <span ref={num1}>15</span>&nbsp;
            <span ref={operator}>?</span>&nbsp;
            <span ref={num2}>5</span>&nbsp;
            <span>=</span>&nbsp;
            <span ref={result}>?</span>

            <div>
            <button onClick = {calculate}>+</button>&nbsp;
                    <button onClick = {calculate}>-</button>&nbsp;
                    <button onClick = {calculate}>*</button>&nbsp;
                    <button onClick = {calculate}>/</button>
            </div> 
        </div>
    )
}