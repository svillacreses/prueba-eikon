export class ItemFactura {
  id: number;
  descripcion: string;
  precio: number;
  fecha_creacion?: string;

  constructor(
    id: number,
    descripcion: string,
    precio: number,
    fecha_creacion?: string
  ) {
    this.id = id;
    this.descripcion = descripcion;
    this.precio = precio;
    this.fecha_creacion = fecha_creacion;
  }

  static fromJSON(json: any): ItemFactura {
    return new ItemFactura(
      json.id,
      json.descripcion,
      json.precio,
      json.fecha_creacion
    );
  }
}

export class Factura {
  id: number;
  numero: string;
  fecha: string;
  cliente: string;
  total: number;
  items?: ItemFactura[];
  fecha_creacion?: string;

  constructor(
    id: number,
    numero: string,
    fecha: string,
    cliente: string,
    total: number,
    items?: ItemFactura[],
    fecha_creacion?: string
  ) {
    this.id = id;
    this.numero = numero;
    this.fecha = fecha;
    this.cliente = cliente;
    this.total = total;
    this.items = items;
    this.fecha_creacion = fecha_creacion;
  }

  static fromJSON(json: any): Factura {
    return new Factura(
      json.id,
      json.numero,
      json.fecha,
      json.cliente,
      json.total,
      (json.items || []).map((item: any) => ItemFactura.fromJSON(item)),
      json.fecha_creacion
    );
  }
}

export class NuevaFactura {
  numero: string;
  fecha: string;
  cliente: string;
  items: { descripcion: string; precio: number }[];

  constructor(
    numero: string,
    fecha: string,
    cliente: string,
    items: { descripcion: string; precio: number }[]
  ) {
    this.numero = numero;
    this.fecha = fecha;
    this.cliente = cliente;
    this.items = items;
  }

  static fromJSON(json: any): NuevaFactura {
    return new NuevaFactura(
      json.numero,
      json.fecha,
      json.cliente,
      (json.items || []).map((item: any) => ({
        descripcion: item.descripcion,
        precio: item.precio,
      }))
    );
  }
}
