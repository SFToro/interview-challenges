type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

export default function continentesRepresentados(array: Registry[]): boolean {
  const representation = {
    Africa: 0,
    Americas: 0,
    Asia: 0,
    Europe: 0,
    Oceania: 0,
  };
  array.forEach((reg) => {
    representation[reg.continent] += 1;
  });

  for (const prop in representation) {
    if (representation[prop] === 0) {
      return false;
    }
  }
  return true;
}
