import express from 'express'

const app = express()
const PORT = process.env.PORT || 3200

app.get('/', (req, res) => res.send('<h1>Tela inicial</h1>'))

// Definimos as duas possibilidades de rota em um array
app.get(['/bemvindo', '/bemvindo/:nome'], (req, res) => {
  const { nome = '' } = req.params
  res.send(`<h1>Olá ${nome}, seja bem-vindo!</h1>`)
})

app.listen(PORT, () => console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`))