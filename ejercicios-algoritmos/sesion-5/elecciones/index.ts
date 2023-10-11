interface Registro {
  id: string;
  voto: string;
  nombre: string;
}

export default function unificarVotos(mesas: Registro[][], parametro: keyof Registro): Registro[] {
  const newFlatMesas = mesas.flat();
  const ids = newFlatMesas.map((reg) => {
    return reg[parametro];
  });
  const voted = new Set();
  const uniqueVotes = newFlatMesas.filter((reg) => {
    if (voted.has(reg[parametro])) return false;
    voted.add(reg[parametro]);
    return true;
  });
  console.log(uniqueVotes);
  return uniqueVotes;
}
