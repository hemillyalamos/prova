const express = require("express");

const produtos = require("../controllers/produtos.controller");

const router = express.Router();

router.get("/produtos", produtos.listar);
router.get("/produtos/:info", produtos.buscar);
router.get("/produtos", produtos.adicionar);


module.exports = router;