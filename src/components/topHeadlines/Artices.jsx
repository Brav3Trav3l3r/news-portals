import React from "react";
import Card from "./Card";

export default function Artices({ data }) {
  const first = data.articles[0];
  const dateObj = new Date(first.publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <div className="main flex flex-col lg:flex-row gap-4 md:gap-8">
      <div className="first lg:flex-1 flex flex-col gap-4 pb-6">
        <div className="overflow-hidden aspect-video">
          <img
            src={first.urlToImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-xs opacity-60 ">{formattedDate}</h1>
            <h1 className="font-medium text-lg md:text-2xl">{first.title}</h1>
          </div>
          <h1 className="opacity-90 md:text-md tracking-wider">
            {first.description}
          </h1>
          <h1 className="text-xs opacity-75">- {first.source?.name}</h1>
        </div>
      </div>
      <div className="divide-y lg:flex-1 divide-neutral">
        {data.articles.slice(1, 4).map((a) => (
          <Card article={a} />
        ))}
      </div>
    </div>
  );
}
