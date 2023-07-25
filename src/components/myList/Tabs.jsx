"use client";

import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Content from "./Content";
import Modal from "./Modal";

export default function Tabs({ tabs, index, handleChange, addTabs }) {
  const handleTabChange = (i) => {
    handleChange(i);
  };

  return (
    <div>
      {tabs?.length ? (
        <div className=" flex gap-4">
          <div className="tabs">
            {tabs.map((t, ind) => (
              <div className="">
                <a
                  onClick={() => handleTabChange(ind)}
                  className={
                    index === ind
                      ? "tab-active tab tab-bordered"
                      : `tab tab-bordered`
                  }
                >
                  {t}
                </a>
              </div>
            ))}
          </div>
          <button onClick={() => window.my_modal_2.showModal()} className="btn btn-sm">
            +
          </button>
        </div>
      ) : (
        // <button className="btn">+</button>
        <button onClick={() => window.my_modal_2.showModal()} className="btn">
          Fill list +
        </button>
      )}
      <Modal addTabs={addTabs} />
    </div>
  );
}
