export default function CreateBoard() {
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
        <form action="newBoard" className="flex flex-col">
          <label htmlFor="title">
            Board title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="border border-red-700 px-2 rounded"
            required
          />
          <p className="text-sm mt-2">👋 Board title is required</p>
          <button className="bg-gray-200 rounded mt-5 p-2 cursor-pointer">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
