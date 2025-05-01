CREATE TABLE IF NOT EXISTS employee (
  ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(80),
  lastname VARCHAR(80),
  speciality VARCHAR(80)
);
INSERT INTO employee (name, lastname, dni, salary) VALUES('Carlos', 'Pingus', '7654321', 3500);
INSERT INTO employee (name, lastname, dni, salary) VALUES('Harin', 'Sepulveda', '7654321', 10000);
INSERT INTO employee (name, lastname, dni, salary) VALUES('William', 'Sulca', '7654321', 1500);
INSERT INTO employee (name, lastname, dni, salary) VALUES('Carlos', 'Pingus Sr', '7654321', 10000);