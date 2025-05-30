import { z } from "zod";

export const facturaSchema = z.object({
  numero: z.string().min(1),
  fecha: z.coerce.date({ message: "La fecha de la factura no es válida" }),
  cliente: z.string().min(1),
  items: z
    .array(
      z.object({
        descripcion: z.string().min(1),
        precio: z.number().positive("El precio debe ser mayor a 0"),
      })
    )
    .nonempty("Se requiere al menos un item"),
});
