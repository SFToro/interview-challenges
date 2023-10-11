import type {AvailableFilterValue, CatRes, MercadoLibreRes, Prod} from "./types";

import {inspect} from "node:util";
const BASE_URL = "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326";

import {PRODUCTS_PER_FETCH} from "./consts.ts";

export async function getCategories() {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = (await res.json()) as MercadoLibreRes;

    return data.available_filters;
  } catch (e) {
    console.log(e);
  }
}

export async function getProds({
  offset,
  filters = [],
  filter_ids = [],
  qty = PRODUCTS_PER_FETCH,
}: {
  offset: number;
  filters?: string[];
  filter_ids?: string[];
  qty?: number;
}) {
  let prods: Prod[] = [];

  let fetchURL = `${BASE_URL}`;

  for (let i = 0; i < filters.length; i++) {
    fetchURL += `&${filter_ids[i]}=${filters[i]}`;
  }
  console.log(fetchURL);
  try {
    const res = await fetch(`${fetchURL}&offset=${offset}&limit=${qty}`);

    if (res.ok) {
      ({results: prods} = (await res.json()) as MercadoLibreRes);
    } else {
      throw new Error("API not responding");
    }
  } catch (e) {
    console.log(e);
  }

  return prods;
}

async function getCategoryTree() {
  let categoriesToSearch: string[];

  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = (await res.json()) as MercadoLibreRes;

    // eslint-disable-next-line @typescript-eslint/unbound-method, @typescript-eslint/dot-notation
    const categoryFilters = data.results.map((r) => {
      return r.category_id;
    });
    // const categoryFilters = data.available_filters.find((f) => f.id === "category");

    // categoriesToSearch = categoryFilters.values.map((cf) => cf.id) ?? [];
    categoriesToSearch = categoryFilters;
    const arr = await Promise.all(
      categoriesToSearch.map(async (cid) => {
        const res = await fetch(`https://api.mercadolibre.com/categories/${cid}`);

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = (await res.json()) as CatRes;

        return {
          ancestor: data.path_from_root,
          children: data.children_categories.map((cc) => {
            return {id: cc.id, name: cc.name};
          }),
        };
      }),
    );
    const categoryTree = {};

    let previousAncestor = {};

    // console.log(arr);
    arr.forEach((c) => {
      c.ancestor.forEach((ancestor, idx) => {
        if (idx === 0) {
          Object.assign(categoryTree, {[ancestor.id]: {name: ancestor.name, children: {}}});
          previousAncestor = categoryTree[ancestor.id];
        } else {
          Object.assign(previousAncestor.children, {
            [ancestor.id]: {name: ancestor.name, children: {}},
          });

          previousAncestor = previousAncestor.children[ancestor.id];
        }
      });

      c.children.forEach((child, dix) => {
        Object.assign(previousAncestor.children, {
          [child.id]: {name: child.name},
        });
      });
      previousAncestor = {};
    });
    console.dir(categoryTree, {depth: null});
  } catch (e) {
    console.log(e);
  }
}
getCategoryTree();
