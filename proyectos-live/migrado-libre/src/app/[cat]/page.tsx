"use client";
import type {Prod} from "@/types";

import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

import Grid from "@/components/grid";
import Product from "@/components/product";
import {getProds} from "@/utils";

export default function CategoryPage({params}: {params: {cat: string}}) {
  const searchParams = useSearchParams();
  const filter_ids: string[] = [];
  const filters: string[] = [];

  searchParams.forEach((value, key) => {
    filter_ids.push(key);
    filters.push(value);
  });

  const [products, setProducts] = useState<Prod[]>([]);

  useEffect(() => {
    async function wrapper() {
      const products = await getProds({offset: 0, filters, filter_ids});

      setProducts(products);
    }
    wrapper();
  }, [searchParams]);

  return (
    <Grid>
      {products.map((p) => {
        return <Product key={p.id} product={p} />;
      })}
    </Grid>
  );
}
