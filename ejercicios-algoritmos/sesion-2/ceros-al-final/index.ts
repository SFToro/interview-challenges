export default function moverCeros(array: unknown[]): unknown[] {
  // TODO: implement
  array.forEach((item, idx) => {
    if (item === 0) {
      array.push(0);
      array.splice(idx, 1);
    }
  });
  return array;
}
