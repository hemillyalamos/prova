const express = require("express");

const router = express.Router();

const vendedores = require("../controllers/vendedores.controller");

router.post("/vendedores", vendedores.adicionar);
router.get("/vendedores", vendedores.listar);


module.exports = router;