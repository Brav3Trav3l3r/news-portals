"use client";

import useSWR from "swr";
import ListCard from "./ListCard";
import { useEffect, useState } from "react";

const fetcher = async (title, page) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${title}&pageSize=8&page=${page}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    // { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export default function Content({ title }) {
  const { data, error } = useSWR(title, () => fetcher(title, page));

  const [page, setPage] = useState(1);
  const [res, setRes] = useState(null);

  const handleAdd = async () => {
    const data = await fetcher(title, page + 1);
    setRes([...res, ...data.articles]);
    setPage((page) => (page += 1));
  };

  useEffect(() => {
    if (data) {
      setRes(data.articles);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [title]);

  console.log(res);

  if (error) return "Error loading data";
  if (!data) return "Loading...";

  return (
    <div className="w-full">
      {res ? (
        <div className="space-y-10 items-center flex flex-col">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {res.map((a) => (
              <ListCard article={a} />
            ))}
          </div>
          <div
            onClick={() => {
              handleAdd(title, page, res);
            }}
            className="btn btn-primary w-40 mx-auto"
          >
            Load more {page}
          </div>
        </div>
      ) : (
        <h1>Fill your list</h1>
      )}
    </div>
  );
}
