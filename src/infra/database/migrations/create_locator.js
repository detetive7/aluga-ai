import { connection } from "../index.js";

const CREATE_LOCATOR_QUERY = `
create table locador (
    cpf varchar(8) not null,
    nome varchar(100) not null,
    dt_nascimento date not null,
    telefone varchar(13) not null,
    email varchar(100) not null
    )
`;

connection
  .query(CREATE_LOCATOR_QUERY)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));