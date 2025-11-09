"use client";

import { useEffect, useState, FormEvent } from "react";
import { useParams } from "next/navigation";

import Header from "@/components/header";

type List = {
  id: number;
  title: string;
};

type Board = {
  id: number;
  title: string;
  lists?: List[];
};

export default function BoardDetailPage() {
  const params = useParams(); // { id: "1730834039810" }
  const [board, setBoard] = useState<Board | null>(null);
  const [newListTitle, setNewListTitle] = useState("");

  const [createList, setCreateList] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("boards");
    if (stored) {
      const allBoards: Board[] = JSON.parse(stored);
      const found = allBoards.find(
        (b) => b.id.toString() === params.id?.toString()
      );
      if (found) setBoard(found);
    }
  }, [params.id]);

  const handleAddList = (e: FormEvent) => {
    e.preventDefault();
    if (!board || !newListTitle.trim()) return;

    const newList: List = {
      id: Date.now(),
      title: newListTitle.trim(),
    };

    const updateBoard: Board = {
      ...board,
      lists: [...(board.lists || []), newList],
    };
    setBoard(updateBoard);
    setNewListTitle("");

    const stored = localStorage.getItem("boards");
    if (stored) {
      const allBoards: Board[] = JSON.parse(stored);
      const updatedBoards = allBoards.map((b) =>
        b.id === updateBoard.id ? updateBoard : b
      );
      localStorage.setItem("boards", JSON.stringify(updatedBoards));
    }
    setCreateList(true);
  };

  if (!board) return <p>Board not found! 😢</p>;

  return (
    <>
      <Header />
      <div className="bg-[url('/background-img.jpeg')] h-screen bg-cover ">
        <nav className=" h-15 w-full flex items-center px-4 border justify-between border-white rounded shadow-sm bg-[#ffffff75]">
          <div className="flex">
            <h2 className="text-shadow-gray-800 ml-5">
              {board ? board.title : "My Board"}
            </h2>
            <p className="flex cursor-pointer">
              <img src="/file.svg" alt="file" className="w-5 ml-5 mr-1" />v
            </p>
          </div>
          <div className="flex items-center pl-3 space-x-4">
            <p className="cursor-pointer flex justify-center bg-blue-500 w-6 rounded-full transition hover:-translate-y-1 duration-150 ease-in">
              👤
            </p>
            <p className="cursor-pointer flex justify-center bg-yellow-300 w-6 rounded-full transition hover:-translate-y-1 duration-150 ease-in">
              ❓
            </p>
            <p className="cursor-pointer flex justify-center bg-red-300 w-6 rounded-full transition hover:-translate-y-1 duration-150 ease-in">
              📢
            </p>
            <p className="cursor-pointer flex justify-center bg-green-200 w-6 rounded-full transition hover:-translate-y-1 duration-150 ease-in">
              🔔
            </p>
          </div>
        </nav>
        <div className="flex">
          <div>
            {(board.lists || []).map((list) => (
              <div
                key={list.id}
                className="ml-10 mt-5 bg-[#ffffffa3] w-50 p-3 rounded-2xl cursor-pointer font-medium flex flex-col"
              >
                <h2 className="font-semibold mb-2">{list.title}</h2>
                <p className="text-sm text-gray-500">tasks here...</p>
              </div>
            ))}
          </div>
          {createList ? (
            <div>
              <button
                className="ml-10 mt-5 bg-[#ffffffa3] w-50 p-3 rounded-2xl cursor-pointer hover:bg-gray-300 font-medium transition hover:scale-105 duration-75 ease-in"
                onClick={() => setCreateList(false)}
              >
                <h1 className="text-start ml-3 text-gray-600">+ Add List</h1>
              </button>
            </div>
          ) : (
            <div className="ml-10 mt-5 bg-[#ffffffa3] w-50 p-3 max-h-25 rounded-2xl cursor-pointer font-medium">
              <form action="create" onSubmit={handleAddList}>
                <input
                  type="text"
                  className="border-[0.3px] border-gray-300 w-full rounded px-1"
                  onChange={(e) => setNewListTitle(e.target.value)}
                  placeholder="List title"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 mt-3 flex justify-self-end rounded cursor-pointer transition hover:scale-110 duration-150 ease-in"
                  type="submit"
                >
                  Create
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
