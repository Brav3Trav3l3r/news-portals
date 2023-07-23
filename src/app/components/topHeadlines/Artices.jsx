import React from "react";
import Card from "./Card";

export default function Artices({ data }) {
  const first = data.articles[0];
  const dateObj = new Date(first.publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <div className="articles">
      <div className="main flex flex-col lg:flex-row gap-8">
        <div className="first flex flex-col gap-4 py-6">
          <div className="img">
            <img src={first.urlToImage} alt="" />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-xs opacity-60">{formattedDate}</h1>
              <h1 className="font-bold text-2xl">{first.title}</h1>
            </div>
            <h1 className="opacity-75 text-md tracking-wider">
              {first.description}
            </h1>
          </div>
        </div>
        <div className="divide-y divide-neutral">
          {data.articles.slice(1, 4).map((a) => (
            <Card article={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
