import Header from "../components/header";
import LeftBar from "../components/leftBar";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <LeftBar />
      <div className="w-[80%] h-[80dvh] ml-75 flex ">
        <div className="w-[40%] flex flex-col items-center ml-55 text-center max-w-[50%] mt-10 border-gray-200 rounded shadow-lg relative h-50">
          {" "}
          <div className="flex justify-center bg-[#fff7ef] w-135">
            {" "}
            <img
              src="dogTrelloPic.png"
              alt="dogTrelloPic"
              className="w-80"
            />{" "}
          </div>
          <h2 className="mt-3">Stay on track and up to date</h2>
          <p className="max-w-150 mt-3">
            Invite people to boards and cards, leave comments, add due dates,
            and we'll show the most important activity here.
          </p>
        </div>
        <div className=" flex flex-col fixed right-0 top-30 w-70">
          <p className="mb-10 text-sm">⏲ Recently viewed</p>
          <p>Links</p>
          <div className="flex items-center mt-5 hover:bg-gray-200 cursor-pointer">
            <button className="bg-gray-200 w-13 h-10 rounded mr-3 cursor-pointer">
              +
            </button>
            <p>Create new board</p>
          </div>
        </div>
      </div>
    </>
  );
}
