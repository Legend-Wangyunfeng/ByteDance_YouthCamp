const http = require('http')
const fs = require('fs')
const { url } = require('inspector')

http.createServer((req, res) => {
  const {url, method, headers} = req
  if(url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if(err) {
        res.writeHead(500, {
          "Content-Type": "text/plain;charset=utf-8"
        })
        res.end("500 服务器挂了")
        return
      }
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  }
  else if(url === '/users' && method === 'GET') {
    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    res.end(JSON.stringify({name: "tom"}))
  }
  else {
    res.statusCode = 400
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('404,啥也没有')

  }
})
.listen(3000, () => {
  console.log('Server at 3000')
})

