import { connection } from "../index.js";

const CREATE_CONTRACT_QUERY = `
    create table contrato (
    id int auto_increment primary key,
    cpf_locador varchar(8),
    imovel_id int,
    pagamento_metodo enum('pix', 'transferencia', 'deposito'),
    FOREIGN KEY (imovel_id) REFERENCES imovel(id)
    );
 `;

 connection
  .query(CREATE_CONTRACT_QUERY)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));