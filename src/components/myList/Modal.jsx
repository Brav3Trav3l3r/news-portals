import React, { useState } from "react";

export default function Modal({ addTabs }) {
  const suggestions = ["Movies", "Crime", "Science", "Share Market", "Coding"];
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      addTabs(input);
      setInput("");
    }
  };

  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div method="dialog" className="modal-box">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="flex relative">
              <input
                name="title"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here"
                className="input input-bordered w-full pr-20"
              />
              <button className="btn btn-primary absolute right-0">Add</button>
            </form>
            <div className="suggestions grid grid-cols-3 gap-4">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={(e) => addTabs(e.target.innerText)}
                  className="btn"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
