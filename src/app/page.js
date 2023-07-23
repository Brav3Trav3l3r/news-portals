// import { motion } from "framer-motion"
import MyList from "./components/myList/MyList";
import TopHeadlines from "./components/topHeadlines/TopHeadlines";

export default function Home() {
  return (
    <main className="">
      <div className="flex border-y-2 border-neutral mx-4 md:mx-10 lg:mx-20">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold m-auto resize py-2">
          THE TIMES
        </h1>
      </div>

      <div className="py-4 mx-4 md:mx-10 lg:mx-20">
        <TopHeadlines />
      </div>
      <div data-theme="lofi" className="">
        <MyList />
      </div>
    </main>
  );
}
