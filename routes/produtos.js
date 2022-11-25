const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o metodo GET na rota de produtos'
    });
});

router.get('/:idProduto', (req, res, next) => {
    const id = req.params.idProduto
    res.status(200).send({
        mensagem: 'Usando o metodo GET de um produto especifico',
        id: id
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o metodo POST na rota de produtos'
    });
});

router.patch('/', (req, res, next) => {
    const id = req.params.idProduto
    res.status(201).send({
        mensagem: 'Usando o metodo PATCH na rota de produtos',
        id: id
    });
});

router.delete('/', (req, res, next) => {
    const id = req.params.idProduto
    res.status(201).send({
        mensagem: 'Usando o metodo DELETE na rota de produtos',
        id: id
    });
});

module.exports = router;