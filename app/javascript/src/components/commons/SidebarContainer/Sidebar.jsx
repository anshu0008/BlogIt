import React from "react";

import { Book, List } from "@bigbinary/neeto-icons";
import { Avatar } from "@bigbinary/neetoui";
import { NavLink } from "react-router-dom";

const SideBar = () => (
  <aside className="bb-border flex flex-col items-center border-r border-bb-border bg-white px-3 py-6 transition-all duration-500">
    <div className="flex flex-1 flex-col gap-4">
      <NavLink
        className="size-10 rounded bg-black p-2 text-center text-white"
        to="/"
      >
        <Book />
      </NavLink>
      <NavLink className="size-10 rounded p-2" to="/">
        <List />
      </NavLink>
    </div>
    <Avatar
      user={{
        imageUrl:
          "https://s3.amazonaws.com/neetoui/v2/images/avatar-square.svg",
        alt: "avatar",
        size: "large",
        name: "Anshu Agrawal",
      }}
    />
  </aside>
);

export default SideBar;
