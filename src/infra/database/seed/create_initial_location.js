import { connection } from "../index.js";

const INSERT_ADDRESS_QUERY = `
insert into
  endereco (
    rua,
    bairro,
    numero,
    cep,
    cidade,
    uf,
    complemento,
    referencia
  )
  
  values (
  	"Rua Maria Eunice Chagas",
    "Bela Vista",
    "689",
    "55195509",
    "Santa Cruz do Capibaribe",
    "pe",
    "Duplex",
    "Na rua da antiga fabrica da Magda"
  )
`;

try {
  console.log(`<inserindo Imovel>`);

  const [{ insertId: addressId }] = await connection.query(
    INSERT_ADDRESS_QUERY
  );

  const INSERT_LOCATION_QUERY = `
  INSERT INTO
    imovel (valor_aluguel, endereco_id)
  values
    (1000.00, ${addressId})
  `;

  const [{ insertId: locationId }] = await connection.query(
    INSERT_LOCATION_QUERY
  );
  console.log(`<Imovel inserido com sucesso : id => ${locationId}>`);
} catch (error) {
  console.log(error);
}
