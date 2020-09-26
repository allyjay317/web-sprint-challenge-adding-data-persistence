const server = require('./server')

const PORT = process.env.PORT || 4000

server.use('/api/project/', require('./projects/projectsRouter'))


server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})