const http = require('http')
const express = require('express')
const app = express()
const port =8000

app.get('/',(request,response)=>{
    response.send(
        
        `
            <!doctype html>
            <html>
            <head>
                <title>Node.js</title>
            </head>

            <body>
                <h3>Welcome to Express.js</h3>
                <b>Express.js Fast , unopinionated , minimalist<br>
                web framework for Node.js</br>
            </body>
        `
    )
})

app.listen(port,()=>console.log('Server listening on port '+port))