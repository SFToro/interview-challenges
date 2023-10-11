import type {Prod} from "@/types";

import Link from "next/link";

export default function Product({product}: {product: Prod}) {
  return (
    <article className=" flex max-w-xs flex-col justify-between border-2 border-solid border-red-400">
      <h3>{product.title}</h3>
      <img alt={product.title} className="w-16" src={product.thumbnail} />
      <a href={`${product.permalink}`}>ML</a>
      <Link href={`${product.category_id}`}>{product.category_id}</Link>
    </article>
  );
}
