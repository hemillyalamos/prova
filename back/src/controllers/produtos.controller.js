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

const buscar = (req, res) => {
    const { info } = req.params;

    let query = `SELECT * FROM produtos WHERE produto LIKE '%${info}%' OR valor LIKE '%${info}%'`;

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

const adicionar = (req, res) => {
    let {id_produto, valor, produto, } = req.body;

    valor = (produto != undefined) ? id_produto : 0;
    valor = (valor != undefined) ? valor : 0;

    if((valor == 0) && (produto == 0)) {
        res.status(400).json({"msg":"Necessario inserir um valor de venda"});
    }else {
        let query = `INSERT INTO produtos VALUES (DEFAULT, ${id_produto}, "${valor}", "${produto}" 1);`;
    
        con.query(query, (err, response) => {
            if(err == undefined) {
                res.status(200).json(response).end();
            }else {
                res.status(400).json(err).end();
            }
        })
    }
}


module.exports = {
    listar,
    buscar,
    adicionar

}