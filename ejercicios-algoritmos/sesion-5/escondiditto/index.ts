export default function encontraditto(pokemon: string[]): number {
  // TODO: implementar
  const pokeNumbers = new Map();
  let prev = "";
  let count = 0;
  let dittoIdx: number = 0;
  pokemon.forEach((p, idx) => {
    // pokeNumbers.set(p, (pokeNumbers.get(p) ?? 0) + 1);
    if (p === prev) {
      count += 1;
    } else {
      count = 0;
    }
    if (count === 2) {
      dittoIdx = idx - 1;
      count = 0;
    }
    prev = p;
  });

  return dittoIdx;
}
