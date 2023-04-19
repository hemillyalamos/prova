const con = require("../dao/connect");

const adicionar = (req, res) => {
    const { id, nome, matricula,  } = req.body;

    let query = `INSERT INTO vendedores 
                 VALUES (DEFAULT, '${ id }',${nome}', '${matricula}')`;

    con.query(query, (err, response) => {
        console.log(err, response);
        if(err == undefined) {
            res.status(201).json(response).end();
        }else {
            let { sqlMessage, sqlState } = err;

            res.status(400).json({ sqlMessage, sqlState }).end();
        }
    });
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



module.exports = {
    adicionar,
    listar
   
}