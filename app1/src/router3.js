import React from 'react'
import { BrowserRouter,NavLink,Route,Routes,Navigate } from 'react-router-dom'

import './products.css'
import './navlink.css'
import Products from './products'
import Home from './home'
import Member from './member'

export default function Router3(){
    return(
        <BrowserRouter>
            <nav className='nav'>
                <NavLink to='/' className={({isActive})=>isActive?"active_menu":"menu"}
                    style={({isActive})=>{
                        return{
                            fontWeight:isActive?"bold":""
                        }
                    }}
                >Home</NavLink> -&nbsp;

                <NavLink to ="/products" className={({isActive})=>
                    isActive?"active_menu":"menu"}>
                        Products
                </NavLink> -&nbsp;

                <NavLink to ="/member" className={({isActive})=>
                    isActive?"active_menu":"menu"}>
                        Member
                </NavLink> -&nbsp;

                <NavLink to ="/contact" className={({isActive})=>
                    isActive?"active_menu":"menu"}>
                        Contact Us
                </NavLink> -&nbsp;
            </nav>

            <Routes style={{margin:'20px'}}>
                <Route path ="/" element ={<Home/>}></Route>
                <Route path ="/products" element ={<Products/>}></Route>
                <Route path ="/member" Component ={Member}></Route>
                <Route path ="/contact" element ={<div style={{textAlign:"center"}}>Contact Us</div>}></Route>
                <Route path ="/*" element = {<Navigate to ='/'></Navigate>}></Route>
            </Routes>
        </BrowserRouter>
    )
}