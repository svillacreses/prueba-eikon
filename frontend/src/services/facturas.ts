import { AxiosError } from "axios";
import { Factura, ItemFactura, NuevaFactura } from "@/models/Factura";
import api from "../lib/axios";

export async function crearFactura(
  data: NuevaFactura
): Promise<{ message: string; id: number }> {
  try {
    const res = await api.post("/facturas", data);
    return res.data;
  } catch (error: AxiosError | any) {
    const errors = error?.response?.data;
    if (Array.isArray(errors)) {
      const firstError: any = errors?.[0]?.message;
      throw new Error(firstError);
    } else {
      throw new Error(
        errors?.message || error?.message || "Error al procesar la solicitud."
      );
    }
  }
}

export async function obtenerFacturas(): Promise<Factura[]> {
  const res = await api.get("/facturas");
  const data = res.data;
  if (Array.isArray(data)) {
    return data.map((factura: any) => Factura.fromJSON(factura));
  }
  return [];
}

export async function obtenerFactura(id: string): Promise<Factura> {
  const res = await api.get(`/facturas/${id}`);
  const data = res.data;
  return Factura.fromJSON(data);
}
