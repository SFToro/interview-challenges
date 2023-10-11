"use client";
import type {Prod} from "@/types";

import {useEffect, useRef, useState} from "react";

import Product from "@/components/product";
import {getProds} from "@/utils";
import {PRODUCTS_PER_FETCH} from "@/consts";
import Grid from "@/components/grid";

export default function HomePage() {
  const [prods, setProds] = useState<Prod[]>([]);
  const idx = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollObserver = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        console.log("Observer callback triggered", entry.isIntersecting);
        setIsVisible(entry.isIntersecting);
      }
    });

    async function init() {
      setProds(await getProds({offset: idx.current}));
      idx.current += PRODUCTS_PER_FETCH;
      if (scrollObserver.current !== null) observer.observe(scrollObserver.current);
    }
    init();

    return () => {
      observer.disconnect();
      try {
      } catch (e) {
        console.log(e);
      }
    };
  }, []);

  useEffect(() => {
    async function w() {
      if (isVisible) {
        const moreProds = await getProds({offset: idx.current});

        idx.current += PRODUCTS_PER_FETCH;

        setProds((prods) => [...prods, ...moreProds]);
      }
    }
    w();
  });

  return (
    <Grid>
      {prods.length > 0 &&
        prods.map((prod) => {
          return <Product key={prod.id} product={prod} />;
        })}
      <span ref={scrollObserver} className="absolute bottom-0" />
    </Grid>
  );
}
