"use client";
import { useState, useEffect, FormEvent } from "react";

import { useRouter } from "next/navigation";

type Board = {
  id: number;
  title: string;
};

export default function CreateBoard() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  const handleCreateBoard = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newBoard: Board = { id: Date.now(), title: newTitle.trim() };

    // adiciona ao array
    const updatedBoards = [...boards, newBoard];
    setBoards(updatedBoards);

    // salva imediatamente no localStorage
    localStorage.setItem("boards", JSON.stringify(updatedBoards));

    // navega pra página dessa nova board
    router.push(`/boards/${newBoard.id}`);
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
