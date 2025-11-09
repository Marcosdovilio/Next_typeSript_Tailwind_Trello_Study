"use client";
import { useState, useRef, useEffect } from "react";
import { useBoards } from "@/hooks/useBoards";
import CreateBoard from "./createBoard";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Board = {
  id: number;
  title: string;
};

export default function RecentlyViewed() {
  const [createNew, setCreateNew] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { boards, createBoard } = useBoards();
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log("Recently viewed boards:", boards);

  return (
    <>
      <div className=" flex flex-col fixed right-0 top-30 w-70">
        <p className="mb-2 text-sm">⏲ Recently viewed</p>
        <ul className="space-y-2">
          {boards.map((board) => (
            <li
              key={board.id}
              onClick={() => router.push(`/boards/${board.id}`)}
              className="cursor-pointer border-0 rounded px-3 py-2 bg-gray-100 hover:bg-gray-200"
            >
              {board.title}
            </li>
          ))}
        </ul>
        <p className="mt-2">Links</p>
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
