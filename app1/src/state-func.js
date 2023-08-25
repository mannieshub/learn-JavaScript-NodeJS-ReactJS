import React,{useState} from 'react'

export default function MessageBox(){
    let [text,setText] = useState('Pongpisut Prasri lnwza')
    let [size,setSize] = React.useState(16)

    const onClickSetText =()=>{
        let t = prompt('กำหนดข้อความ')
        if(t){
            setText(t)
        }
    }

    const onClickZoomIn =()=>{
        let newSize = size + 1
        setSize(newSize)
    }

    let msgboxStyle={
        display:'inline-block',
        width:350,
        fontSize:size,
        backgroundColor:'#ccc',
        padding:5,
        textAlign:'center'
    }

    return(
        <div style={{textAlign:'center',marginTop:20}}>
            <div style={msgboxStyle}>{text}</div><br/><br/>
            <button onClick = {onClickSetText}>ข้อความ</button>&nbsp;
            <button onClick = {onClickZoomIn}>เพิ่มขนาด</button>&nbsp;
            <button onClick = {()=>setSize(size-1)}>ลดขนาด</button>
        </div>
    )
}