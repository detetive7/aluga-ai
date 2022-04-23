import { connection } from "../index.js";

const CREATE_LOCATION_QUERY = `
create table imovel (
  id int auto_increment primary key,
  valor_aluguel float not null,
  endereco_id int,
  FOREIGN KEY (endereco_id) REFERENCES endereco(id)
)
`;

connection
  .query(CREATE_LOCATION_QUERY)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));
