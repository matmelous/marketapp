INSERT INTO products(produtos, marca, peso, valor, mercado) VALUES(
  "Açucar Refinado",
  "União",
  1,
  "4,29",
  "Condor"
);

ALTER TABLE products MODIFY valor VARCHAR(225);
ALTER TABLE products ADD COLUMN mercado VARCHAR(75);
