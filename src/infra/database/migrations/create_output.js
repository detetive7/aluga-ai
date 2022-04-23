import { connection } from "../index.js";

const CREATE_OUTPUT_QUERY = `
create table output(
  id int auto_increment primary key,
  id_imovel int,
  FOREIGN KEY (id_imovel) REFERENCES location (id),
  descricao varchar(150),
  tipo enum('pintura','reparo','eletrica', 'encanamento'),
  tag varchar(150),
  metodo_pagamento enum('pix','fisico')
)`