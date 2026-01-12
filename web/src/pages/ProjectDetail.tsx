import MainNavbar from "../components/layout/MainNavbar";
import MainTopbar from "../components/layout/MainTopbar";
import jd from "../assets/jd.webp";
import nd from "../assets/nd.jpg";
import g1 from "../assets/g1.jpg";
import Threedot from "../assets/icons8-three-dots-50.png";
const ProjectDetail = () => {
  return (
    <div className="min-h-screen flex bg-linear-to-br from-gray-50 to-gray-100">
      <MainNavbar />
      <div className="w-full flex flex-col ml-0 lg:ml-56">
        <MainTopbar />
        <main className="h-full m-3 sm:m-4 md:m-6">
          <section className="text-blue-600 cursor-pointer flex items-center gap-2 hover:text-blue-700 w-max transition-all hover:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="text-sm font-medium">Back to Projects</span>
          </section>
          <section className="flex flex-col justify-between items-center mt-6">
            <div className="flex w-full gap-x-3 items-center justify-between">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Website Developing
              </h1>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block mr-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                  Invite
                </button>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium text-white transition-colors shadow-sm">
                  Edit Project
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 mt-6">
              {/* Left Sidebar - Project Info */}
              <div className="flex flex-col w-full lg:w-1/4 gap-4">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Project Overview
                    </h2>
                  </div>
                  {/* Add project details here */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-sm text-gray-500 tracking-wide mb-1">
                        Description
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        This project involves developing a responsive website
                        for a client using modern web technologies.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 tracking-wide mb-1">
                        Date Created
                      </h3>
                      <p className="text-sm text-gray-900 font-medium">
                        January 15, 2024
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 tracking-wide mb-1">
                        Due Date
                      </h3>
                      <p className="text-sm text-gray-900 font-medium">
                        February 15, 2024
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500  tracking-wide mb-1">
                        Status
                      </h3>
                      <p className="text-sm text-green-600 font-semibold">
                        In Progress
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 tracking-wide mb-2">
                        Progress
                      </h3>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-linear-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: "33%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-600 font-medium">
                          33% Complete
                        </span>
                        <span className="text-xs text-blue-600 font-semibold">
                          1/3 Tasks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                        Team Members
                      </h2>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      3
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <img
                      src={jd}
                      alt="John Doe"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-lg hover:scale-110 hover:shadow-xl transition-all cursor-pointer ring-2 ring-gray-200 hover:ring-blue-400"
                    />
                    <img
                      src={nd}
                      alt="Nina Doe"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-lg hover:scale-110 hover:shadow-xl transition-all cursor-pointer ring-2 ring-gray-200 hover:ring-blue-400"
                    />
                    <img
                      src={g1}
                      alt="Gehlee Dangca"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-lg hover:scale-110 hover:shadow-xl transition-all cursor-pointer ring-2 ring-gray-200 hover:ring-blue-400"
                    />
                    <button className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Right Content - Tasks/Details */}
              <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 h-auto lg:h-[calc(100vh-12rem)] flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-green-600 rounded-full"></div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Tasks Board
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Filter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                        />
                      </svg>
                    </button>
                    <button
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Options"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 h-full w-full gap-x-4 overflow-x-auto pb-2">
                  {/* To Do Card Design */}
                  <div className="bg-linear-to-b from-red-50 to-red-100/50 min-w-[320px] w-1/3 rounded-xl p-4 flex flex-col max-h-full border border-red-200/50">
                    <div className="font-semibold text-gray-800 flex items-center justify-between gap-2 mb-4 shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">To Do</span>
                        <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-semibold">
                          4
                        </span>
                      </div>
                      <div className="flex gap-x-1">
                        <button className="cursor-pointer p-1 hover:bg-red-200/50 rounded transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                        <button className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer p-1 hover:bg-red-200/50 rounded">
                          <img
                            src={Threedot}
                            alt="Options"
                            className="size-4"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="overflow-y-auto space-y-3 flex-1 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                      <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl hover:border-gray-300 transition-all duration-200 cursor-pointer group">
                        <div className="flex justify-between items-start mb-3">
                          <span className="bg-red-100 text-red-600 font-semibold rounded-md px-2.5 py-1 text-xs">
                            High
                          </span>
                          <button className="opacity-0 group-hover:opacity-60 hover:opacity-100! transition-opacity">
                            <img
                              src={Threedot}
                              alt="Three dot icon"
                              className="size-4"
                            />
                          </button>
                        </div>

                        <h3 className="font-semibold text-gray-900 text-base mb-2 line-clamp-2">
                          Fix API Bug in Backend
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                          Fix the issue causing incorrect data to be returned
                          from the API endpoint
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 font-medium">
                              Assignee
                            </span>
                            <img
                              src={jd}
                              alt="Jane Doe"
                              className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                            />
                          </div>

                          <div className="flex items-center gap-x-2 text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                              />
                            </svg>
                            <span className="text-xs">Oct 28, 2030</span>
                          </div>

                          <div className="pt-3 border-t border-gray-100 flex items-center gap-x-3">
                            <div className="flex items-center gap-x-1.5 text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                />
                              </svg>
                              <span className="text-xs">3</span>
                            </div>
                            <div className="flex items-center gap-x-1.5 text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                                />
                              </svg>
                              <span className="text-xs">2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* In Progress Card Design */}
                  <div className="bg-linear-to-b from-blue-50 to-blue-100/50 min-w-[320px] w-1/3 rounded-xl p-4 flex flex-col max-h-full border border-blue-200/50">
                    <div className="font-semibold text-gray-800 flex items-center justify-between gap-2 mb-4 shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm">In Progress</span>
                        <span className="bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs font-semibold">
                          2
                        </span>
                      </div>
                      <div className="flex gap-x-1">
                        <button className="cursor-pointer p-1 hover:bg-blue-200/50 rounded transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                        <button className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer p-1 hover:bg-blue-200/50 rounded">
                          <img
                            src={Threedot}
                            alt="Options"
                            className="size-4"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="overflow-y-auto space-y-3 flex-1 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                      <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl hover:border-gray-300 transition-all duration-200 cursor-pointer group">
                        <div className="flex justify-between items-start mb-3">
                          <span className="bg-blue-100 text-blue-600 font-semibold rounded-md px-2.5 py-1 text-xs">
                            Low
                          </span>
                          <button className="opacity-0 group-hover:opacity-60 hover:opacity-100! transition-opacity">
                            <img
                              src={Threedot}
                              alt="Three dot icon"
                              className="size-4"
                            />
                          </button>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-base mb-2 line-clamp-2">
                          Update Button Style in Website
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                          Change the button styles to match the new design
                          guidelines.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 font-medium">
                              Assignee
                            </span>
                            <img
                              src={g1}
                              alt="Gehlee Dangca"
                              className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                            />
                          </div>
                          <div className="flex items-center gap-x-2 text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                              />
                            </svg>
                            <span className="text-xs">Oct 28, 2030</span>
                          </div>
                          <div className="pt-3 border-t border-gray-100 flex items-center gap-x-3">
                            <div className="flex items-center gap-x-1.5 text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                />
                              </svg>
                              <span className="text-xs">7</span>
                            </div>
                            <div className="flex items-center gap-x-1.5 text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                                />
                              </svg>
                              <span className="text-xs">10</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Completed Card Design */}
                  <div className="bg-linear-to-b from-green-50 to-green-100/50 min-w-[320px] w-1/3 rounded-xl p-4 flex flex-col max-h-full border border-green-200/50">
                    <div className="font-semibold text-gray-800 flex items-center justify-between gap-2 mb-4 shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm">Completed</span>
                        <span className="bg-green-500 text-white rounded-full px-2 py-0.5 text-xs font-semibold">
                          2
                        </span>
                      </div>
                      <div className="flex gap-x-1">
                        <button className="cursor-pointer p-1 hover:bg-green-200/50 rounded transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                        <button className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer p-1 hover:bg-green-200/50 rounded">
                          <img
                            src={Threedot}
                            alt="Options"
                            className="size-4"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="overflow-y-auto space-y-3 flex-1 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                      <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl hover:border-gray-300 transition-all duration-200 cursor-pointer group">
                        <div className="flex justify-between items-start mb-3">
                          <span className="bg-yellow-100 text-yellow-600 font-semibold rounded-md px-2.5 py-1 text-xs">
                            Medium
                          </span>
                          <button className="opacity-0 group-hover:opacity-60 hover:opacity-100! transition-opacity">
                            <img
                              src={Threedot}
                              alt="Three dot icon"
                              className="size-4"
                            />
                          </button>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-base mb-2 line-clamp-2">
                          Finish Homepage Design
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                          Complete the design of the homepage according to the
                          new branding guidelines.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 font-medium">
                              Assignee
                            </span>
                            <img
                              src={nd}
                              alt="Nicole Demara"
                              className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                            />
                          </div>
                          <div className="flex items-center gap-x-2 text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                              />
                            </svg>
                            <span className="text-xs">Oct 28, 2030</span>
                          </div>
                          <div className="pt-3 border-t border-gray-100 flex items-center gap-x-3">
                            <div className="flex items-center gap-x-1.5 text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                />
                              </svg>
                              <span className="text-xs">5</span>
                            </div>
                            <div className="flex items-center gap-x-1.5 text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                                />
                              </svg>
                              <span className="text-xs">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;
