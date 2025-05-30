-- Insertamos cabeceras de facturas
INSERT INTO factura (numero, fecha, cliente) VALUES
  ('F-001','2025-06-01 09:00:00','Juan Pérez'),
  ('F-002','2025-06-02 14:30:00','María Gómez'),
  ('F-003','2025-06-03 10:15:00','Carlos Méndez'),
  ('F-004','2025-06-04 08:45:00','Ana Rivas'),
  ('F-005','2025-06-04 16:00:00','Laura Torres'),
  ('F-006','2025-06-05 11:30:00','Diego Herrera'),
  ('F-007','2025-06-06 13:20:00','Sofía Vega');

-- Insertamos detalles de facturas
INSERT INTO item_factura (factura_id, descripcion, precio) VALUES
  (1,'Producto A',  10.50),
  (1,'Servicio X',  25.00),

  (2,'Producto B',   5.75),
  (2,'Producto C',  12.20),
  (2,'Servicio Y', 100.00),

  (3,'Producto D', 8.40),
  (3,'Producto E', 19.99),
  (3,'Servicio Z', 50.00),

  (4,'Producto F', 15.00),
  (4,'Accesorio A', 3.99),

  (5,'Producto G', 22.25),
  (5,'Servicio Especial', 120.00),

  (6,'Producto H', 9.50),
  (6,'Producto I', 14.30),
  (6,'Accesorio B', 2.75),

  (7,'Consultoría', 200.00);