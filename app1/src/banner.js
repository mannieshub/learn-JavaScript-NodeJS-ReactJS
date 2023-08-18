import React from 'react'

function randInt(min,max){
    let x = (max-min)+1
    return min+Math.floor(Math.random()* x)
}

export default function Banner(){
    const r = randInt(1,3)
    let banner = ''
    let url  = ''


    switch(r){
        case 1:
            banner = './banners/react.jpg'
            url = 'https://www.reactjs.org'
            break

        case 2:
            banner = './banners/react-native.jpg'
            url = 'https://www.reactnative.org'
            break

        case 3:
            banner = './banners/node.jpg'
            url = 'https://www.nodejs.org'
            break

        default:break
    }

    const bannerClick =()=>{
        window.open(url)
    }

    return(
        <div style = {{margin:'20px',textAlign:'center'}}>
            <img src={banner} onClick={bannerClick} style= {{cursor:'pointer'}} alt="banner"/>
        </div>
    )
}