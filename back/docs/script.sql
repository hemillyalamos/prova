DROP DATABASE IF EXISTS loja;
CREATE DATABASE loja;

USE loja;

CREATE TABLE vendedores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(153) NOT NULL,
    matricula VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE vendas (
    id INT NOT NULL,
    data DATE not NULL,
    quantidade INT NOT null,
    produto_id INT NOT NULL,
    vendedor_id INT NOT NULL
);


CREATE TABLE produtos (

    id_produtos INT NOT NULL,
    produto VARCHAR(10) NOT NULL UNIQUE,
    valor FLOAT(10,2)
   
);

INSERT INTO vendedores VALUES (DEFAULT, "Stefany Antonella", "14644");
INSERT INTO vendedores VALUES (DEFAULT, "Stella Viana", "01516");
INSERT INTO vendedores VALUES (DEFAULT, "Tomás Isaac", "50913");
INSERT INTO vendedores VALUES (DEFAULT, "Osvaldo Galvão", "72193");



INSERT INTO produtos VALUES (1,  "Samsung Galaxy M53", 2211.11);
INSERT INTO produtos VALUES (2,  "Motorola Moto G42", 1499.00);
INSERT INTO produtos VALUES (3,  "Rainha das Chamas", 36.90);
INSERT INTO produtos VALUES (4,  "Cronicas Saxonicas- O cavaleiro da morte", 57.90);
INSERT INTO produtos VALUES (5,  "O milagre de manhã", 56.59);
INSERT INTO produtos VALUES (6,  "Lavadoura de Roupas Brastemp BWK12AB", 2199.00);
INSERT INTO produtos VALUES (7,  "Fogao Atlas 4 Bocas ",899.00);

INSERT INTO vendas VALUES (1, '2023-04-18 09:08:39', 2, 1, 3);
INSERT INTO vendas VALUES (2, '2023-04-18 09:08:39', 1, 2, 3);
INSERT INTO vendas VALUES (3, '2023-04-18 09:08:39', 3, 1, 2);
INSERT INTO vendas VALUES (4, '2023-04-18 09:08:39', 1, 3, 2);
INSERT INTO vendas VALUES (5, '2023-04-18 09:08:39', 2, 2, 1);
INSERT INTO vendas VALUES (6, '2023-04-18 09:08:39', 1, 3, 1);