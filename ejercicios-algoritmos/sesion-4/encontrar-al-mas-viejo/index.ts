import type { Developer } from "./types";

export default function encontrarAlMasViejo(developers: Developer[]): Developer[] {
  let result: { currentMaxAge: number; devs: Developer[] } = {
    currentMaxAge: 0,
    devs: [],
  };
  developers.forEach((dev, idx) => {
    if (dev.age >= result.currentMaxAge) {
      result.currentMaxAge = dev.age;
      result.devs.push(dev);
    }
  });

  // TODO: implementar
  return result.devs;
}
