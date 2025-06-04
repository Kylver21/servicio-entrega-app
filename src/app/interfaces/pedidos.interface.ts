export interface Pedido {
  id: number;
  usuarioId: number;
  productos: {
    productoId: number;
    cantidad: number;
  }[];
  total: number;
  estado: string;
  fecha: string;
}
