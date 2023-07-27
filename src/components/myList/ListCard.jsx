export default function ListCard({ article }) {
  const dateObj = new Date(article?.publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <a href={article?.url} target="_blank">
      <div className="space-y-3">
        <div className="image aspect-video w-full">
          <img
            src={article?.urlToImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-xs opacity-60">{formattedDate}</h1>
          <h1 className="text-lg font-medium line-clamp-4">{article?.title}</h1>
          <h1 className="text-xs opacity-75">- {article?.source?.name}</h1>
        </div>
      </div>
    </a>
  );
}
