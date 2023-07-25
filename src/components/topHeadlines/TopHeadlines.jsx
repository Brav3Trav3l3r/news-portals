import Artices from "./Artices";

const getHeadlines = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function TopHeadlines() {
  const data = await getHeadlines();

  return (
    <div className="top-headlines py-6 space-y-6">
      <h1 className="opacity-50 w-fit text-sm font-semibold">TOP HEADLINES</h1>
      <Artices data={data} />
    </div>
  );
}
