import RecentlyViewed from "@/components/recently-viwed";
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
        <RecentlyViewed />
      </div>
    </>
  );
}
