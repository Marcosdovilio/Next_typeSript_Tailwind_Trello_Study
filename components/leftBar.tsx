"use client";
import { useState } from "react";

export default function LeftBar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className=" pt-10 max-w-70 font-sans font-medium text-base fixed">
      <div className="ml-3">
        <div className="cursor-pointer hover:bg-gray-200 mb-3 p-1 flex items-center rounded">
          <p className="pr-3">🔲</p>
          <h2>Boards</h2>
        </div>
        <div className="hover:bg-gray-200 cursor-pointer mb-3 p-1 flex items-center rounded">
          <p className="pr-3">🎞</p>
          <h2>Templates</h2>
        </div>
        <div className="hover:bg-gray-200 cursor-pointer mb-3 p-1 flex items-center rounded">
          <p className="pr-3">🏠</p>
          <h2>Home</h2>
        </div>
      </div>{" "}
      <div className="border border-gray-200 w-[95%] flex justify-self-center"></div>
      <div className="ml-3 flex flex-col">
        <p className="text-xs mt-5">Work areas</p>
         <div
          className="mt-3 flex items-center hover:bg-gray-200 cursor-pointer p-3 rounded"
          onClick={() => setDropdown((prev) => !prev)}
        >
          <div className="bg-linear-to-t from-cyan-500 to-green-500 h-8 w-8 rounded border border-blue-500">
            <h1 className="flex justify-center mt-1 text-white">T</h1>
          </div>
          <h1 className="ml-5">Trello Worskpace</h1>{" "}
          <p className="ml-10">{dropdown ? "∧" : "v"}</p>
        </div>
        
        {dropdown && <div> <div className="hover:bg-gray-200 cursor-pointer mb-1 p-1 flex items-center rounded">
          <h2 className="ml-10 text-sm">🔲 Boards</h2>
        </div>
        <div className="hover:bg-gray-200 cursor-pointer mb-1 p-1 flex items-center justify-between rounded">
          <h2 className="ml-10 text-sm">👥 Members</h2>
          <p className="mr-5">+</p>
        </div>
        <div className="hover:bg-gray-200 cursor-pointer mb-1 p-1 flex items-center rounded">
          <h2 className="ml-10 text-sm">🛠 Settings</h2>
        </div>
        </div>}
      </div>
    </div>
  );
}
