-- Cabecera de Facturas
CREATE TABLE factura (
  id        SERIAL PRIMARY KEY,
  numero    VARCHAR(50) NOT NULL,
  fecha     TIMESTAMP NOT NULL,
  cliente   VARCHAR(100) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Detalle de Facturas
CREATE TABLE item_factura (
  id          SERIAL PRIMARY KEY,
  factura_id  INT NOT NULL REFERENCES factura(id),
  descripcion VARCHAR(200) NOT NULL,
  precio      NUMERIC(10,2) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
