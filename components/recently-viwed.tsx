"use client";
import { useState, useRef, useEffect } from "react";
import CreateBoard from "./createBoard";

export default function RecentlyViewed() {
  const [createNew, setCreateNew] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setCreateNew(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className=" flex flex-col fixed right-0 top-30 w-70">
        <p className="mb-10 text-sm">⏲ Recently viewed</p>
        <p>Links</p>
        <div
          className="flex items-center mt-5 hover:bg-gray-100 cursor-pointer"
          onClick={() => setCreateNew((prev) => !prev)}
        >
          <button className="bg-gray-200 w-13 h-10 rounded mr-3 cursor-pointer">
            +
          </button>
          <p>Create new board</p>
        </div>
      </div>
      <div ref={menuRef}>{createNew && <CreateBoard />}</div>
    </>
  );
}
