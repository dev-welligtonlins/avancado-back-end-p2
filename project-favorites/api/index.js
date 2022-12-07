const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')


http.createServer((req, res) => {
    // res.end(JSON.stringify(data)) //teste
    // console.log(URL.parse(req.url, true).query) // teste

    const {name, url, del} = URL.parse(req.url, true).query

    if(!name || !url)
        return res.end('show')
  
    if(del)
        return res.end('delete')

    return res.end('create')

        
}).listen(3000, () => console.log('API is running.'))