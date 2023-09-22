import React from 'react'

export default function Home(){
    return(
        <p style={{textAlign:'center'}}>
            <h3>Welcome Home</h3>
            รายชื่อ <a href="/products">Product</a> ที่เรามีจำหน่าย
            <br></br>
            แต่ท่านต้องเป็น <a href="/member">Member</a> จึงจะสั่งซื้อได้
            <br></br>
            หากมีข้อสงสัย <a href ="/contact">ติดต่อเราได้ที่นี่</a>
        </p>
    )
}