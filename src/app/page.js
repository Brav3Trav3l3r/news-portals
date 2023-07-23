import Image from "next/image";
import TopHeadlines from "./components/topHeadlines/TopHeadlines";

export default function Home() {
  return (
    <main className="px-4 md:px-10 lg:px-20">
      <div className="title w-full flex border-y-2 border-neutral ">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold m-auto resize py-2">
          THE TIMES
        </h1>
      </div>

      <div className="py-4">
        <TopHeadlines />
      </div>
    </main>
  );
}
