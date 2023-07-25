"use client";

import { useState } from "react";
import Content from "./Content";
import Tabs from "./Tabs";
import useStorage from "../../../../utils/useStorage";

export default function Container() {
  const [tabs, setTabs] = useStorage("TABS");
  console.log(tabs)

  const [index, setIndex] = useState(0);

  const handleChange = (i) => {
    console.log(i);
    setIndex(i);
  };

  return (
    <div className="container">
      <Tabs handleChange={handleChange} index={index} tabs={tabs} />
      {/* <Content title={tabs[index]} /> */}
    </div>
  );
}
