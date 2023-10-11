export default function validarParéntesis(parentesis: string): boolean {
  // TODO: implement
  let arr = [...parentesis];
  let count = arr.reduce((acc, char) => {
    if (char === "(") {
      return (acc += 1);
    } else if (char === ")") {
      return (acc -= 1);
    }
    return acc;
  }, 0);

  return count === 0;
}
