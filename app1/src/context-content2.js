import React from 'react'
import { userContext } from './context'

export default function Content2(){
    let[user,setUser]= React.useContext(userContext)

    const contentStyle ={
        backgroundColor:'#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }

    const onClickSignIn =(event)=>{
        event.preventDefault()
        setUser('Tom Jerry')
    }

    return(
        <div style ={contentStyle}>
            {
                (user)
                ?<span>Hello{user}</span>
                :<span>Please <a href =" " onClick={onClickSignIn}>SignIn</a></span>
            }
            
        </div>
    )
}