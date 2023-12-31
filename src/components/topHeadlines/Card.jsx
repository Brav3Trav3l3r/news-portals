import React from "react";

export default function Card({ article }) {
  const dateObj = new Date(article.publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <a href={article.url} target="_blank">
      <div className="flex lg:flex-row-reverse gap-4 py-8 lg:first:pt-0 first:border-t-2 border-neutral lg:first:border-none">
        <div className="w-3/5 space-y-3">
          <h1 className="text-xs opacity-60">{formattedDate}</h1>
          <h1 className="text-lg font-medium line-clamp-4">{article.title}</h1>
          <h1 className="text-xs opacity-75">- {article.source?.name}</h1>
        </div>
        <div className="w-2/5 aspect-video overflow-hidden">
          <img
            src={article.urlToImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </a>
  );
}
