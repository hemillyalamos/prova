const express = require("express");

const router = express.Router();

const vendedores = require("../controllers/vendedores.controller");

router.post("/vendedores", vendedores.cadastrar);
router.get("/vendedores", vendedores.listar);
router.put("/vendedores", vendedores.alterar);


module.exports = router;