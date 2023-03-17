const http = require('http')
const port = 3000
const fs = require('fs')
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {



    // if (req.url === '/home') {
    //     fs.readFile('./views/home.html', (err, data) => {
    //         res.writeHead(200, { "content-Type": 'text/html' })
    //         res.write(data)
    //         res.end()
    //     })
    // } else if (req.url === '/contact') {
    //     fs.readFile('./views/contact.html', (err, data) => {
    //         res.writeHead(200, { "content-Type": 'text/html' })
    //         res.write(data)
    //         res.end()
    //     })
    // }
    // else if (req.url === '/about') {
    //     fs.readFile('./views/about.html', (err, data) => {
    //         res.writeHead(200, { "content-Type": 'text/html' })
    //         res.write(data)
    //         res.end()
    //     })
    // }


    /////Same thing like upper code here code re useablity
    const handleFile = (code, fLocation) => {
        fs.readFile(fLocation, (err, data) => {
            res.writeHead(code, { "content-Type": 'text/html' })
            res.write(data)
            res.end()
        })
    }

    if (req.url === '/home') {
        handleFile(200, './views/home.html')
    } else if (req.url === '/contact') {
        handleFile(200, './views/contact.html')
    } else if (req.url === '/about') {
        handleFile(200, './views/about.html')
    }



})

server.listen(port, hostname, () => {
    console.log(`server: http://${hostname}:${port}`)
})