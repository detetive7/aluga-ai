import { Connection } from "../index.js";

const CREATE_INPUT_QUERY = `
create table input(
    id auto_increment primary key,
    id_contrato int,
    FOREIGN KEY (id_contrato) REFERENCES endereco(id),
    cpf_locador varchar(8),
    FOREIGN KEY (cpf_locador) REFERENCES endereco(cpf),
    descricao varchar(150),
    valor float not null,
    tipo enum('aluguel','multa','reparo'),
    metodo_pagamento enum('pix','transferencia','deposito'),
    tag varchar(100)
)`

connection
  .query(CREATE_INPUT_QUERY)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));