export default function Header() {
  return (
    <>
      <div className=" h-15 flex items-center justify-between px-4 border-gray-50 rounded shadow-sm relative">
        <div className="flex items-center justify-start ml-3">
          <img src="globe.svg" alt="window" width={20} />
          <h2 className="ml-2 cursor-pointer text-lg">🏡 Tiello</h2>
        </div>
        <div className="flex items-center ">
          <form action="search">
            <input
              type="text"
              className="border-[0.3px] border-gray-300 w-[45dvw] py-0.5 rounded pl-3"
              placeholder="🔎 Search"
            />
          </form>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 ml-3 rounded cursor-pointer ">
            Create
          </button>
        </div>
        <div className="flex items-center pl-3 space-x-4">
          <p className="cursor-pointer flex justify-center bg-red-300 w-6 rounded-full">
            📢
          </p>
          <p className="cursor-pointer flex justify-center bg-green-200 w-6 rounded-full">
            🔔
          </p>
          <p className="cursor-pointer flex justify-center bg-yellow-300 w-6 rounded-full">
            ❓
          </p>
          <p className="cursor-pointer flex justify-center bg-blue-500 w-6 rounded-full">
            👤
          </p>
        </div>
      </div>
    </>
  );
}
