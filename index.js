const http = require('http')
const axios = require('axios')
const https = require('https')
const fs = require('fs')

const port = 8080

const url = "http://localhost:8080/"

const home = fs.readFileSync('./home.html', "utf8")

const about = fs.readFileSync('./aboutme.html', "utf8")

const page404 = fs.readFileSync('./404.html', "utf8")

const contact = fs.readFileSync('./contactme.html', "utf8")

const server = http.createServer( (req, res) => {
  res.statusCode = 200
  res.setHeader( 'Content-Type', 'text/html' )
  req.url === '/' ? res.end(home) :
  req.url === '/about' ? res.end(about) :
  req.url === '/contact' ? res.end(contact) :
  res.end(page404)
  
})

server.listen(port, () => {
  console.log('el servidor esta corriendo el puerto 8080')
})



//axios
//  .post('http://localhost:8080/about'), {
//    about: 'buy the milk'
//  }
//  .then( res => {
//    console.log(`statusCode: ${res.status}`)
//    console.log(res)
//  })
//  .catch(error => {
//    console.error(error)
//  })

