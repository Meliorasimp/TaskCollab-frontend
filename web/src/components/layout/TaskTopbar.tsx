const TaskTopbar = () => {
  return (
    <div className="h-16 w-full border-b-2 border-gray-200">
      <div className="flex items-center px-8 h-full w-full justify-between">
        <div className="w-2/5 relative">
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
        <div>
          <select
            name="filter"
            id="filter"
            className="py-1 px-2 rounded-md border border-gray-400"
          >
            <option value="" className="rounded-2xl">
              Filter
            </option>
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskTopbar;
