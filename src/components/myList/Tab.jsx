"use client";

import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/ReactContexify.css";

export default function Tab({ t, ind, index, handleChange, deleteTab }) {
  const handleTabChange = (i) => {
    handleChange(i);
  };

  const { show } = useContextMenu({
    id: t,
  });

  function handleContextMenu(event) {
    show({
      event,
      props: {
        key: "value",
      },
    });
  }

  const handleDelete = (t) => {
    deleteTab(t);
  };

  return (
    <div className="">
      <a
        onContextMenu={handleContextMenu}
        onClick={() => handleTabChange(ind)}
        className={
          index === ind ? "tab-active tab tab-bordered" : `tab tab-bordered`
        }
      >
        {t}
      </a>

      <Menu id={t}>
        <Item id="delete" onClick={() => handleDelete(t)}>
          Delete
        </Item>
      </Menu>
    </div>
  );
}
