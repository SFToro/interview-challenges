import type { Developer } from "./types";

export default function encontrarLaMedia(developers: Developer[]): number {
  // TODO: implementar
  const media =
    developers.reduce((previous, dev, idx) => {
      return previous + dev.age;
    }, 0) / developers.length;
  return Math.ceil(media);
}
