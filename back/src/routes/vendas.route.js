const express = require("express");
const routerVendas = express.Router();

const Venda = require('../controllers/vendas');
const { vendas } = require("../controllers/vendas.controller");

routerVendas.post('/venda', vendas.cadastrar);
routerVendas.get('/vendas', vendas.listar);
routerVendas.get('/vendas/:id', vendas.listar);
routerVendas.get('/total', vendas.total);
routerVendas.put('/alterarVenda', vendas.alterar);
routerVendas.delete('/excluirVenda/:id', vendas.excluir);


module.exports = routerVendas