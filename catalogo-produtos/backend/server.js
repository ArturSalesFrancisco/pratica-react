const express = require ('express');
const cors = require('cors');
const app = express ();
app.use(cors());
const produtos = [
  { id: 1, nome: 'Teclado mecânico', preco: 249.9, categoria: 'Periféricos', descricao: 'Teclado com conexão USB.' },
  { id: 2, nome: 'Mouse sem fio', preco: 89.9, categoria: 'Periféricos', descricao: 'Mouse compacto e ergonômico.' },
  { id: 3, nome: 'Monitor 24 polegadas', preco: 799, categoria: 'Monitores', descricao: 'Monitor Full HD.' },
  { id: 4, nome: 'Webcam HD', preco: 159, categoria: 'Acessórios', descricao: 'Webcam para videoconferências.' },
  { id: 5, nome: 'Fone do Rommel', preco: 109.9, categoria: 'Acessórios', descricao: 'Fone para programar igual o Rommel.'},
  { id: 6, nome: 'Fone de fio', preco: 45.9, categoria: 'Acessórios', descricao: 'Fone com fio transparente.'}
];

app.use(express.static('front'));

app.get('/', (req, res) => {
    res.send (`Olá estranho.`)
})

app.get('/produtos', (req, res) => {
    res.json(produtos)
})

app.get('/produtos/:id', (req, res) => {
    const id = parseInt (req.params.id)

    const index = produtos.findIndex (prod => prod.id === id)
    if (index >= 0) {
        res.json(produtos[index])
    } else {
        res.status(404).send ('Produto não existe')
    }
})

app.use(express.json());

app.post('/produtos', (req, res) => {
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco,
        categoria: req.body.categoria,
        descricao: req.body.descricao
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

app.put('/produtos/:id', (req, res) => {
    const id = parseInt (req.params.id)

    const produto = produtos.find(prod => prod.id === id)
    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.categoria = req.body.categoria;
    produto.descricao = req.body.descricao;

    res.json(produto);
});

app.delete('/produtos/:id', (req, res) => {
    const id = parseInt (req.params.id)

    const index = produtos.findIndex(prod => prod.id === id)
    if (index === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produtos.splice(index, 1);

    res.json({
        mensagem: "Produto excluído com sucesso"
    });
});

const port = 3000;
app.listen (port, ()=>{
    console.log (`Server rodando no http://localhost:${port}`);
});