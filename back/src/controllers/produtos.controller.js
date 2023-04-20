const con = require("../dao/connect");

const listar = (req, res) => {
    let query = "SELECT * FROM produtos";

    con.query(query, (err, response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const adicionar = (req, res) => {
    let produto = new Produto(req.body)
    con.query(produto.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}
const excluir = (req, res) => {
    let produto = new Produto(req.params)
    con.query(produto.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    listar,
    adicionar,
    excluir

}