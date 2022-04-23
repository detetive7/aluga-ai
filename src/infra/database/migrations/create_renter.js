import { connection } from "../index.js";

const CREATE_RENTER_QUERY = `
create table locatario (
    cpf varchar(8) not null,
    nome varchar(150) not null,
    dt_nascimento date not null,
    telefone bigint,
    email varchar(100) not null,
    endereco int not null
    )
`;

connection
  .query(CREATE_RENTER_QUERY)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));