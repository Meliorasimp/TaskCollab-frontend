import MainNavbar from "../components/layout/MainNavbar";
import MainTopbar from "../components/layout/MainTopbar";
const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <MainNavbar />
      <div className="w-full flex flex-col">
        <MainTopbar />
        <main className="p-6 h-full">
          <section className="h-2/7 flex gap-x-6 mb-6">
            <div className="bg-white shadow-md rounded-2xl w-1/5 h-4/5 p-6 flex justify-between flex-col hover:border-blue-400 transition-all duration-300 border-2 border-gray-200">
              <div className="flex justify-between items-center">
                <h1 className="text-lg">Tasks Today</h1>
                <div className="h-10 w-10 bg-blue-300 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-3xl">10+</h1>
                <p className="text-sm text-gray-400">Not that many.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-2xl w-1/5 h-4/5 p-6 flex justify-between flex-col hover:border-green-400 transition-all duration-300 border-2 border-gray-200">
              <div className="flex justify-between items-center">
                <h1 className="text-lg">Completed Today</h1>
                <div className="h-10 w-10 bg-green-300 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                    color="green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-3xl">32</h1>
                <p className="text-sm text-gray-400">Nice work!</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-2xl w-1/5 h-4/5 p-6 flex justify-between flex-col hover:border-red-400 transition-all duration-300 border-2 border-gray-200">
              <div className="flex justify-between items-center">
                <h1 className="text-lg">Overdue Tasks</h1>
                <div className="h-10 w-10 bg-red-300 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                    color="red"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-3xl">5</h1>
                <p className="text-sm text-gray-400">Needs attention.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
