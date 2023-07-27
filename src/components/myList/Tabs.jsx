"use client";

import Tab from "./Tab";
import { Fragment } from "react";
import Content from "./Content";
import Modal from "./Modal";

export default function Tabs({
  tabs,
  index,
  handleChange,
  addTabs,
  deleteTab,
}) {
  return (
    <div>
      {tabs?.length ? (
        <div className=" flex gap-4">
          <div className="tabs">
            {tabs.map((t, ind) => (
              <Tab
                key={t}
                t={t}
                ind={ind}
                index={index}
                deleteTab={deleteTab}
                handleChange={handleChange}
              />
            ))}
          </div>
          <button
            onClick={() => window.my_modal_2.showModal()}
            className="btn btn-sm"
          >
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
