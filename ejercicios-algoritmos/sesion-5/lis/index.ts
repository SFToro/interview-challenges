export default function encontrarLIS(numeros: number[]): number {
  // TODO: implementar
  let sequences: number[][] = [];
  let subsequence: number[] = [];
  numeros.forEach((n, idx) => {
    subsequence.push(n);
    let prvious = n;
    for (let i = idx; i < numeros.length; i++) {
      if (numeros[i] > prvious) {
        subsequence.push(numeros[i]);
        prvious = numeros[i];
      }
    }
    sequences.push(subsequence);
    subsequence = [];
  });
  let maxLength = sequences.reduce((max, seq) => {
    return seq.length > max ? seq.length : max;
  }, 0);
  // console.log(sequences.find((seq) => seq.length === maxLength));
  return maxLength;
}
