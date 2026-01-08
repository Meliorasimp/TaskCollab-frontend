import { Link } from "react-router";
import MainNavbar from "../components/layout/MainNavbar";
import MainTopbar from "../components/layout/MainTopbar";
import jd from "../assets/jd.webp";
import nd from "../assets/nd.jpg";
const Dashboard = () => {
  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      <MainNavbar />
      <div className="w-full flex flex-col overflow-hidden">
        <MainTopbar />
        <main className="p-6 flex-1 flex gap-x-6 overflow-hidden">
          <div className="flex-1 flex flex-col">
            <section className="flex gap-x-6 mb-6">
              <div className="bg-white shadow-md rounded-2xl w-1/3 p-6 flex justify-between flex-col hover:border-blue-400 transition-all duration-300 border-2 border-gray-200">
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
              <div className="bg-white shadow-md rounded-2xl w-1/3 p-6 flex justify-between flex-col hover:border-green-400 transition-all duration-300 border-2 border-gray-200">
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
              <div className="bg-white shadow-md rounded-2xl w-1/3 p-6 flex justify-between flex-col hover:border-red-400 transition-all duration-300 border-2 border-gray-200">
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
            <section className="flex-1 rounded-2xl flex flex-col border-2 border-gray-200 shadow-md bg-white p-4">
              <div className="flex items-center justify-between h-10 w-full">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                    color="gray"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <h1 className="text-lg font-semibold">My Tasks Today</h1>
                </div>
                <div>
                  <Link
                    className="rounded-2xl bg-gray-100 px-4 py-1 flex items-center gap-x-2 hover:bg-gray-200 transition-all duration-200 cursor-pointer"
                    to={"/task/:username"}
                  >
                    See all
                  </Link>
                </div>
              </div>
              <table className="w-full mt-2">
                <thead>
                  <tr className="text-left border-b-2 border-gray-200">
                    <th className="py-3 px-4 font-medium align-middle">
                      <div className="flex items-center gap-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                          />
                        </svg>
                        Task Name
                      </div>
                    </th>
                    <th className="py-3 px-4 font-medium align-middle">
                      <div className="flex items-center gap-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                          />
                        </svg>
                        Assigned by
                      </div>
                    </th>
                    <th className="py-3 px-4 font-medium align-middle">
                      <div className="flex items-center gap-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                          />
                        </svg>
                        Status
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* First Table Row*/}
                  <tr className="border-b-2 border-gray-200 hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                    <td className="py-4 px-4 align-middle">Design new logo</td>
                    <td className="py-4 px-4 align-middle">
                      <div className="flex items-center gap-x-2">
                        <img
                          src={jd}
                          alt="Jane Doe"
                          className="w-7 h-7 rounded-full"
                        />
                        <h1>Jane Doe</h1>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-middle text-green-600">
                      In Progress
                    </td>
                  </tr>
                  {/* Second Table Row*/}
                  <tr className="border-b-2 border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                    <td className="py-4 px-4 align-middle">Update Website</td>
                    <td className="py-4 px-4 align-middle">
                      <div className="flex items-center gap-x-2">
                        <img
                          src={nd}
                          alt="Nicole Demara"
                          className="w-7 h-7 rounded-full"
                        />
                        <h1>Nicole Demara</h1>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-middle text-yellow-600">
                      Pending
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="w-80 flex flex-col gap-y-6">
            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-2xl p-4 border-2 border-gray-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-orange-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h2 className="font-semibold text-lg">Upcoming Deadlines</h2>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">
                        Client Presentation
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        Marketing Project
                      </p>
                    </div>
                    <span className="text-xs text-red-600 font-semibold">
                      Today
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">API Integration</h3>
                      <p className="text-xs text-gray-600 mt-1">
                        Backend Development
                      </p>
                    </div>
                    <span className="text-xs text-yellow-600 font-semibold">
                      Tomorrow
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">Code Review</h3>
                      <p className="text-xs text-gray-600 mt-1">
                        Development Team
                      </p>
                    </div>
                    <span className="text-xs text-blue-600 font-semibold">
                      Jan 10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-4 border-2 border-gray-200 shadow-md">
              <div className="flex items-center gap-x-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <h2 className="font-semibold text-lg">Recent Activity</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-x-3">
                  <img
                    src={jd}
                    alt="Jane Doe"
                    className="w-8 h-8 rounded-full mt-1"
                  />
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">Jane Doe</span> completed{" "}
                      <span className="font-medium">Design new logo</span>
                    </p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <img
                    src={nd}
                    alt="Nicole Demara"
                    className="w-8 h-8 rounded-full mt-1"
                  />
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">Nicole Demara</span>{" "}
                      commented on{" "}
                      <span className="font-medium">Update Website</span>
                    </p>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <img
                    src={jd}
                    alt="Jane Doe"
                    className="w-8 h-8 rounded-full mt-1"
                  />
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">Jane Doe</span> assigned you
                      to{" "}
                      <span className="font-medium">Client Presentation</span>
                    </p>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-2xl p-4 border-2 border-gray-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                  <h2 className="font-semibold text-lg">Team Members</h2>
                </div>
                <span className="text-xs text-green-600 font-medium">
                  2 online
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div className="relative">
                      <img
                        src={jd}
                        alt="Jane Doe"
                        className="w-9 h-9 rounded-full"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Jane Doe</h3>
                      <p className="text-xs text-gray-500">Designer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div className="relative">
                      <img
                        src={nd}
                        alt="Nicole Demara"
                        className="w-9 h-9 rounded-full"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Nicole Demara</h3>
                      <p className="text-xs text-gray-500">Developer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div className="relative">
                      <img
                        src={jd}
                        alt="Alex Chen"
                        className="w-9 h-9 rounded-full"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Alex Chen</h3>
                      <p className="text-xs text-gray-500">Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
