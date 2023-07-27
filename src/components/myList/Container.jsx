"use client";

import { Suspense, useState } from "react";
import Content from "./Content";
import Tabs from "./Tabs";
import useStorage from "../../../utils/useStorage";

export default function Container() {
  const [tabs, setTabs] = useStorage("TABS");

  const addTabs = (title) => {
    setTabs([...tabs, title]);
  };

  const deleteTab = (title) => {
    const newTab = tabs.filter((t) => t !== title);
    setTabs(newTab);
  };

  const [index, setIndex] = useState(0);

  const handleChange = (i) => {
    setIndex(i);
  };

  return (
    <div className="container space-y-6">
      <Tabs
        handleChange={handleChange}
        index={index}
        tabs={tabs}
        addTabs={addTabs}
        deleteTab={deleteTab}
      />
      {tabs?.length ? (
        <Suspense fallback={<Loading />}>
          <Content title={tabs[index]} />
        </Suspense>
      ) : (
        ""
      )}
    </div>
  );
}

function Loading() {
  return <div className="h-96 w-full bg-red-500"></div>;
}
