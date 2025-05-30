import { Request, Response } from "express";
import pool from "../db";
import { facturaSchema } from "../schemas/factura.schema";

export async function crearFactura(req: Request, res: Response) {
  const result = facturaSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error.errors);
  }

  const { numero, fecha, cliente, items } = result.data;
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const facturaResult = await client.query(
      `INSERT INTO factura (numero, fecha, cliente)
       VALUES ($1, $2::timestamp, $3)
       RETURNING id`,
      [numero, fecha, cliente]
    );
    const factura_id = facturaResult.rows[0].id;

    for (const item of items) {
      await client.query(
        `INSERT INTO item_factura (factura_id, descripcion, precio)
         VALUES ($1, $2, $3)`,
        [factura_id, item.descripcion, item.precio]
      );
    }

    await client.query("COMMIT");
    res.status(201).json({ message: "Factura creada", id: factura_id });
  } catch (error) {
    await client.query("ROLLBACK");
    res.status(500).json({ error });
  } finally {
    client.release();
  }
}

export async function listarFacturas(req: Request, res: Response) {
  const client = await pool.connect();
  try {
    const facturas = await client.query(
      `SELECT f.id, f.numero, f.fecha, f.cliente, SUM(i.precio) AS total
       FROM factura f
       JOIN item_factura i ON i.factura_id = f.id
       GROUP BY f.id, f.numero, f.fecha, f.cliente
       ORDER BY f.fecha DESC`
    );

    res.json(facturas.rows);
  } catch (error) {
    res.status(500).json({ error });
  } finally {
    client.release();
  }
}

export async function listarFactura(req: Request, res: Response) {
  // Obtiene la información de la cabecera + los items de la factura
  const { id } = req.params;
  const client = await pool.connect();
  try {
    const factura = await client.query(
      `SELECT f.id, f.numero, f.fecha, f.cliente, SUM(i.precio) AS total
       FROM factura f 
        JOIN item_factura i ON i.factura_id = f.id
       WHERE f.id = $1
       GROUP BY f.id, f.numero, f.fecha, f.cliente`,
      [id]
    );

    if (factura.rows.length === 0) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }

    const items = await client.query(
      `SELECT id, descripcion, precio, fecha_creacion
       FROM item_factura
       WHERE factura_id = $1`,
      [id]
    );

    res.json({
      ...factura.rows[0],
      items: items.rows,
    });
  } catch (error) {
    res.status(500).json({ error });
  } finally {
    client.release();
  }
}
