import React from "react";
import { FaStepBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full overflow-y-auto px-5 flex flex-col">
      <div className="flex-grow">
        <Link
          to="/kokubun"
          className="cursor-pointer flex justify-evenly item-center border mt-2 rounded-md"
        >
          <h1 className="texd-lg font-medium p-4 m-2">国文学科</h1>
        </Link>
        <Link
          to="eibun"
          className="cursor-pointer flex justify-evenly item-center border mt-2 rounded-md"
        >
          <h1 className="texd-lg font-medium p-4 m-2">英文学科</h1>
        </Link>
        <Link
          to="tetsugaku"
          className="cursor-pointer flex justify-evenly item-center border mt-2 rounded-md"
        >
          <h1 className="texd-lg font-medium p-4 m-2">哲学科</h1>
        </Link>
        <Link
          to="bunkashi"
          className="cursor-pointer flex justify-evenly item-center border mt-2 rounded-md"
        >
          <h1 className="texd-lg font-medium p-4 m-2">文化史学科</h1>
        </Link>
        <Link
          to="bijyutsu"
          className="cursor-pointer flex justify-evenly item-center border mt-2 rounded-md"
        >
          <h1 className="texd-lg font-medium p-4 m-2">美学芸術学科</h1>
        </Link>
      </div>

      <Link
        to="/"
        className="flex items-center justify-evenly cursor-pointer mb-2 p-4 hover:text-slate-500"
      >
        <FaStepBackward />
        <span className="texd-lg font-medium m-2">ホーム</span>
      </Link>
    </div>
  );
};

export default Sidebar;
