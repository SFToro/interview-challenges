export default function buscarAislado(numeros: number[]): number {
  // TODO: implementar

  let result: { odds: number[]; even: number[] } = {
    odds: [],
    even: [],
  };
  numeros.forEach((n, idx) => {
    if (n % 2 === 0) result.even.push(idx);
    else {
      result.odds.push(idx);
    }
  });
  return result.odds.length === 1 ? numeros[result.odds[0]] : numeros[result.even[0]];
}
