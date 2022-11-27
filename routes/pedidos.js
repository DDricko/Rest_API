const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o metodo GET na rota de pedidos'
    });
});

router.get('/:idPedido', (req, res, next) => {
    const id = req.params.idPedido
    res.status(200).send({
        mensagem: 'Usando o metodo GET de um produto pedidos',
        id: id
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o metodo POST na rota de pedidos'
    });
});

router.delete('/', (req, res, next) => {
    const id = req.params.idProduto
    res.status(201).send({
        mensagem: 'Usando o metodo DELETE na rota de pedidos',
        id: id
    });
});

module.exports = router;