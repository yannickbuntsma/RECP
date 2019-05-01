const express = require('express')
const next = require('next')

const port = process.env.PORT || 8000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // @ts-ignore TODO: Add types for req and res
  server.get('/recipe/:id', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params)
    return app.render(req, res, '/recipe', mergedQuery)
  })

  // @ts-ignore TODO: Add types for req and res
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err: Error) => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
})
