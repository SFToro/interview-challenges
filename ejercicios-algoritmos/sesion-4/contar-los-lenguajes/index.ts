import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  // TODO: implementar

  let summary: Record<string, number> = developers.reduce((previous, dev) => {
    previous[dev.language] = (previous[dev.language] ?? 0) + 1;
    return previous;
  }, {});

  return summary;
}
