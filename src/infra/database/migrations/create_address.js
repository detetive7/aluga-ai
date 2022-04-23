import { connection } from "../index.js";

const CREATE_ADDRESS_QUERY = `
create table endereco (
  id int auto_increment primary key,
  rua varchar(150) not null,
  bairro varchar(150) not null,
  numero int not null,
  cep varchar(8) not null,
  cidade varchar(150) not null,
  uf varchar(2) not null,
  complemento varchar(255) not null,
  referencia varchar(255) not null
);
`;

connection
  .query(CREATE_ADDRESS_QUERY)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));
