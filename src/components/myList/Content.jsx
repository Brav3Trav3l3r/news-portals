"use client";

import useSWR from "swr";

const fetcher = async (title) => {
  console.log(title);
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${title}&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export default function Content({ title }) {
  console.log(title);
  const { data, error } = useSWR(title, fetcher);

  if (error) return "Error occured";
  if (!data) return "Loading...";

  return (
    <div className="">
      {data ? (
        data.articles.map((a) => <h1>{a.title}</h1>)
      ) : (
        <h1>Fill your list</h1>
      )}
    </div>
  );
}
