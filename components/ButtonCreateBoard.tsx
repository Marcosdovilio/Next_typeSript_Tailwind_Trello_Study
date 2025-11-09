"use client";
import { useState, useRef, useEffect } from "react";
import CreateBoard from "./createBoard";

export default function ButtonCreateBoard() {
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
    <div ref={menuRef}>
      <button
        className="mt-20 p-10 rounded-2xl border-0  bg-gray-400 hover:bg-gray-500 cursor-pointer text-white"
        onClick={() => setCreateNew((prev) => !prev)}
      >
        + Create new board
      </button>
      {CreateBoard && createNew && (
        <div className="fixed left-155 bottom-10">
          <CreateBoard />
        </div>
      )}
    </div>
  );
}
