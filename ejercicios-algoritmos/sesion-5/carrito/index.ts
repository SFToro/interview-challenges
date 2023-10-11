import type {Carrito, Item, Producto} from "./types";

export default function manejarCarrito(
  producto: Producto,
  cantidad: number,
  carrito: Carrito = [],
): Carrito {
  // TODO: implementar

  if (carrito.length === 0) {
    return cantidad === 0 ? [] : [[producto.id, {producto, cantidad}]];
  }

  const idx = carrito.findIndex(([id, item]) => {
    return id === producto.id;
  });

  const [id, prodToUpdate] = carrito[idx];
  const newQty = prodToUpdate.cantidad + cantidad;
  if (newQty <= 0) carrito.splice(idx, 1);
  else {
    const newItem = {...prodToUpdate, cantidad: newQty};
    carrito[idx] = [id, newItem];
  }

  return carrito;
}
