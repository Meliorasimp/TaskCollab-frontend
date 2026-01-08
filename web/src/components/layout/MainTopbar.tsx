import g1 from "../../assets/g1.jpg";
const MainTopbar = () => {
  return (
    <div className="h-16 w-full border-b-2 border-gray-200">
      <div className="flex items-center px-8 h-full w-full justify-between">
        <div className="w-1/2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search tasks..."
            className="rounded-full bg-gray-200 pl-10 pr-4 py-2.5 w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
          />
        </div>
        <div className="w-1/2 flex gap-x-4 justify-end">
          <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2.5 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <h1 className="pr-2">New Tasks</h1>
          </button>
          <div className="flex items-center gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 h-8 w-8 ml-6 text-gray-600 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
            <img
              src={g1}
              alt="User Avatar"
              className="h-10 w-10 rounded-full ml-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTopbar;
