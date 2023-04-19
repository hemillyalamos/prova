const express = require("express");
const cors = require("cors");

const vendedoresRoutes = require("./src/routes/vendedores.route");
const produtosRoutes = require("./src/routes/produtos.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use(vendedoresRoutes);
app.use(produtosRoutes);

app.listen(3000, () => {
    console.log("rodando");
});