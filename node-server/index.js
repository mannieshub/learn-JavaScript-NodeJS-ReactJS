const http = required('http')
const port =8000

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write(

        `
            <!doctype html>
            <html>
            <head>
                <title>Node.js</title>
            </head>

            <body>
            </body>
        `
    )
})