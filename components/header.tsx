"use client";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="relative h-15 w-full flex items-center justify-between px-4 border-gray-50 rounded shadow-sm bg-[#ffffffdf]">
        <div className="flex items-center justify-start ml-3">
          <h2 className="ml-2 cursor-pointer text-lg">
            <Link href={`/`}>🏡 Tiello</Link>
          </h2>
        </div>
        <div className="flex items-center ">
          <form action="search">
            <input
              type="text"
              className="border-[0.3px] border-gray-300 w-[45dvw] py-0.5 rounded pl-3"
              placeholder="🔎 Search"
            />
          </form>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 ml-3 rounded cursor-pointer transition hover:scale-110 duration-150 ease-in">
            Create
          </button>
        </div>
        <div className="flex items-center pl-3 space-x-4">
          <p className="cursor-pointer flex justify-center bg-red-300 w-6 rounded-full transition hover:-translate-y-1 duration-150 ease-in">
            📢
          </p>
          <p className="cursor-pointer flex justify-center bg-green-200 w-6 rounded-full transition hover:-translate-y-1 duration-150 ease-in">
            🔔
          </p>
          <p className="cursor-pointer flex justify-center bg-yellow-300 w-6 rounded-full transition hover:-translate-y-1 duration-150 ease-in">
            ❓
          </p>
          <p className="cursor-pointer flex justify-center bg-blue-500 w-6 rounded-full transition hover:-translate-y-1 duration-150 ease-in">
            👤
          </p>
        </div>
      </div>
    </>
  );
}
