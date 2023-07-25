"use client";

import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Content from "./Content";
import Modal from "./Modal";

export default function Tabs({ tabs, index, handleChange }) {
  const handleTabChange = (i) => {
    handleChange(i);
  };

  return (
    <>
      <div className="tabs">
        {tabs?.length ? (
          tabs?.map((t, ind) => (
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
              <button className="btn">+</button>
            </div>
          ))
        ) : (
          <button onClick={() => window.my_modal_2.showModal()} className="btn">
            Fill list +
          </button>
        )}
      </div>
      <Modal />
    </>
  );
}
