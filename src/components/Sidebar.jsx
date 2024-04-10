import React from "react";
import { FaStepBackward } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-full overflow-y-auto px-5 flex flex-col">
      <div>
        <div className="cursor-pointer flex justify-evenly item-center border mt-2 rounded-md">
          <h1 className="texd-lg font-medium p-4 m-2">気になる授業を保存</h1>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-evenly item-center border mt-4 rounded-md h-full">
          <h1 className="texd-lg font-medium m-2">マイカート</h1>
        </div>
      </div>
      <div className="mt-8"></div>
      <div className="flex items-center justify-evenly cursor-pointer mb-2 p-4 hover:text-slate-500">
        <FaStepBackward />
        <span className="texd-lg font-medium m-2">戻る</span>
      </div>
    </div>
  );
};

export default Sidebar;
