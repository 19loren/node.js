/*
Baseado no exemplo em:
https://expressjs.com/en/starter/hello-world.html
*/

const express = require('express')
const app = express()
const port = 2929

//definimos as rotas uma embaixo da outra
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//no final colocamos para rodar o servidor 
//respondendo na porta acima
app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`)
})