const con = require("../dao/connect");

const cadastrar = (req, res) => {
    let vendedor = new Vendedor(req.body)
    con.query(vendedor.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let query = "SELECT * FROM vendedores";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}
const alterar = (req, res) => {
    let vendedor = new Vendedor(req.body)
    con.query(vendedor.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}


module.exports = {
    cadastrar,
    listar,
    alterar
   
}