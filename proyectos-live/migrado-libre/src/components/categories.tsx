"use client";
import type {AvailableFilter} from "@/types";

import {useCallback, useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import {getCategories} from "@/utils";

export default function Categories() {
  const [filters, setFilters] = useState<AvailableFilter[]>([]);
  const [_, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const router = useRouter();

  function toggleVisibility(id: string) {
    if (localStorage.getItem(id) !== "visible") {
      localStorage.setItem(id, "visible");
    } else {
      localStorage.setItem(id, "hidden");
    }
    forceUpdate();
  }

  useEffect(() => {
    async function w() {
      const data = (await getCategories()) ?? [];

      setFilters(data);
    }
    w();
  }, []);

  const searchParams = useSearchParams();
  const [filter_ids, setFilterIds] = useState<string[]>([]);
  const [filters_params, setFilterParams] = useState<string[]>([]);

  useEffect(() => {
    const filters_params: string[] = [];
    const filter_ids: string[] = [];

    searchParams.forEach((value, key) => {
      filter_ids.push(key);
      filters_params.push(value);
    });
    setFilterIds(filter_ids);
    setFilterParams(filters_params);
  }, [searchParams]);

  function reconstructURL(current: string, filter_id: string, filter: string) {
    const currentURL = new URL(current);

    const oldFilter = currentURL.searchParams.get(filter_id) ?? "";

    if (oldFilter !== "") {
      if (filter === oldFilter) {
        currentURL.searchParams.delete(filter_id);
      } else {
        currentURL.searchParams.set(filter_id, filter);
      }
    } else {
      currentURL.searchParams.append(filter_id, filter);
    }
    currentURL.pathname = "/cat";
    router.push(currentURL.toString());
  }

  return (
    <ul>
      {filters.length > 0 &&
        filters.map((c) => (
          <li key={c.id}>
            <button
              className="text-left"
              type="button"
              onClick={() => {
                toggleVisibility(c.id);
              }}
            >
              {c.name}
            </button>
            <ul className={localStorage.getItem(c.id) ?? "hidden"}>
              {c.values.map((v) => (
                <li
                  key={v.id}
                  className={`${
                    filter_ids.some((fid) => {
                      return fid === c.id;
                    }) &&
                    filters_params.some((fv) => {
                      return fv === v.id;
                    })
                      ? "text-red-400"
                      : "text-slate-400"
                  }`}
                >
                  <button
                    className="text-left"
                    type="button"
                    onClick={() => reconstructURL(window.location.href, c.id, v.id)}
                  >
                    <span> </span>
                    {v.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
    </ul>
  );
}
