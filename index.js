const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(
  express.json()
)

app.post('/adduser', (req, res) => {
  const { name, email, password, cpf } = req.body
  if (!name) {
    res.status(422).json({message: "Nome é obrigatório"})
    return
  }
  res.status(201).json({message: `Usuário ${name} cadastrado com sucesso!`})
  console.log(name, email, cpf)
})

app.get('/', (req, res) => {
  res.status(200).json({ message: "Primeira rota criada com sucesso: HELLO API RESTful"})
})

app.listen(3000)