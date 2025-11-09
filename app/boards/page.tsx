"use client";
import Header from "@/components/header";
import LeftBar from "@/components/leftBar";
import ButtonCreateBoard from "@/components/ButtonCreateBoard";
import { useBoards } from "@/hooks/useBoards";
import { useRouter } from "next/navigation";

export default function Boards() {
  const { boards, createBoard } = useBoards();
  const router = useRouter();

  return (
    <>
      <Header /> <LeftBar />
      <div className="ml-100 mt-10">
        <div className="flex items-center ml-60 mt-30">
          <div className="bg-linear-to-t from-cyan-500 to-green-500 h-20 w-20 rounded border border-blue-500">
            <h1 className="flex justify-center font-bold text-[30px] mt-4 text-white">
              T
            </h1>
          </div>
          <h1 className="ml-5 text-[30px]"> Trello Workspace</h1>
        </div>
        <div className="w-full border-[0.2px] border-gray-300 mt-10"></div>
        <div className="mt-30">
          <h2 className="ml-2">🌄 Your Boards</h2>
          <ul className="flex">
            {boards.map((board) => (
              <li
                key={board.id}
                onClick={() => router.push(`/boards/${board.id}`)}
                className="cursor-pointer border-0 rounded w-45 px-3 py-2 bg-gray-100 hover:bg-gray-200"
              >
                <img src="background-img.jpeg" alt="bg-img" className="w-40" />
                {board.title}
              </li>
            ))}
          </ul>
          <ButtonCreateBoard />
        </div>
      </div>
    </>
  );
}
