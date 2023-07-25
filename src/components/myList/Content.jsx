"use client";

import useSWR from "swr";

const fetcher = async (title) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${title}&apiKey=${process.env.API_KEY}`
    // { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default function Content({ title }) {
  const { data, error } = useSWR("content", () => fetcher(title));

  if (error) return "Error occured";
  if (!data) return "Loading...";

  return (
    <div>
      {data ? (
        data.articles.map((a) => <h1>{a.title}</h1>)
      ) : (
        <h1>Fill your list</h1>
      )}
    </div>
  );
}
