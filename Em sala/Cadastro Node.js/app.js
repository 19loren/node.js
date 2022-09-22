const express = require('express')
const app = express()
const port = 3000

function obterClientesCadastrados(){
    clientes =[]
    c1 = {
        nome: "João Vittor Pou da Silva",
        cpf: "111122233344",

    }
    c2 ={
        nome: "Marcão Bolsonaro Capitão",
        cpf: "221722172217",

    }
    c3 ={
        nome: "Pedro Lucena dos Santos Rublo Negro",
        cpf: "241324132413",

    }
    clientes.push(c1)
    clientes.push(c2)
    clientes.push(c3)
    return clientes
}

/*
    Rota default (/) - Rota principal de servico
*/

app.get('/', (req, res) => {
  res.send('Pagina cadastro')
})

/*
    Rotas adcionais - Vem na URL, depois da raiz
*/ 

app.get('/obterClientes', function (req, res) {
    clientes=obterClientesCadastrados()
    res.send(`Clientes cdastrados: ${JSON.stringify(clientes)}`)
})
app.get('/obterClientePorCPF/:cpf', function (req, res) {
    clientes=obterClientesCadastrados()
    cpf_param_recebido=req.params.cpf
    cliente_retornado=0

    clientes.forEach(function(c,indice,array){
        if(c.cpf===cpf_param_recebido){
            cliente_retornado=c
            //return
        }
    })
    if (cliente_retornado===0){
        res.send('Cliente Não encontrado')
    }
    else{
        res.send('Cliente encontrado: '
        +JSON.stringify(cliente_retornado))
    }
})
app.post('/cadastrarCliente', (req, res) => {
    res.send('cliente cadastrado com sucesso ')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})