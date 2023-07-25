import React from "react";

export default function Modal({ addTabs }) {
  const suggestions = ["Movies", "Crime", "Science", "Share Market", "Coding"];

  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div method="dialog" className="modal-box">
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
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
