"use client";
import { useState, useEffect, FormEvent } from "react";
import { useBoards } from "@/hooks/useBoards";

import { useRouter } from "next/navigation";

export default function CreateBoard() {
  const { boards, createBoard } = useBoards();
  const [newTitle, setNewTitle] = useState("");
  const router = useRouter();

  const handleCreateBoard = (e: FormEvent) => {
    e.preventDefault();
    const board = createBoard(newTitle);
    if (board) {
      setNewTitle("");
      router.push(`/boards/${board.id}`);
    }
  };

  return (
    <div className="bg-white border-gray-200 border rounded shadow-lg p-4 z-index-10 w-80  flex flex-col items-center justify-center">
      <div className="flex w-full justify-center px-5">
        {" "}
        <p className="font-bold text-neutral-600">Create board</p>
      </div>
      <img
        src="createBoard.png"
        alt="createBoard"
        className="w-60 mt-5 rounded"
      />

      <div className="w-full mt-5">
        <form
          action="newBoard"
          className="flex flex-col"
          onSubmit={handleCreateBoard}
        >
          <label htmlFor="title">
            Board title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="border border-red-700 px-2 rounded"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <p className="text-sm mt-2">👋 Board title is required</p>
          <button
            className="bg-gray-200 rounded mt-5 p-2 cursor-pointer"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
