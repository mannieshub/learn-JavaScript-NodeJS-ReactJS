import React from 'react'

export function Calculator2(){
    const n1=15
    const n2=5

    const calculate =(op)=>{
        let c = `${n1} ${op} ${n2}`
        let r = eval(c)
        alert(`${c} = ${r}`)
    }

    return(
        <div style={{textAlign:'center',marginTop:20}}>
            <span>{n1}</span>&nbsp;
            <button onClick={()=>calculate('+')}>+</button>&nbsp;
            <button onClick={()=>calculate('-')}>-</button>&nbsp;
            <button onClick={()=>calculate('*')}>x</button>&nbsp;
            <button onClick={()=>calculate('/')}>/</button>&nbsp;
            <span>{n2}</span>
        </div>
    )
}