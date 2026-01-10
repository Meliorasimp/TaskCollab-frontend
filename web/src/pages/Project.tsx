import MainNavbar from "../components/layout/MainNavbar";
import MainTopbar from "../components/layout/MainTopbar";
import jd from "../assets/jd.webp";
import nd from "../assets/nd.jpg";
import voodoodoll from "../assets/voodoo-doll.png";
const Project = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <MainNavbar />
      <div className="w-full flex flex-col ml-56">
        <MainTopbar />
        <main className="h-full m-6">
          <section className="h-10">
            <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
          </section>
          <section className="h-10 flex justify-between items-center mt-4">
            <div className="flex w-full gap-x-3 items-center">
              <div className="flex gap-x-3">
                <div className="relative">
                  <select
                    name="type"
                    id="type"
                    className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer text-sm font-medium text-gray-700"
                  >
                    <option value="">Status</option>
                    <option value="Individual">In Progress</option>
                    <option value="Project">Completed</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <select
                    name="type"
                    id="type"
                    className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer text-sm font-medium text-gray-700"
                  >
                    <option value="">Team Member</option>
                    <option value="Individual"></option>
                    <option value="Project">Completed</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <select
                    name="type"
                    id="type"
                    className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer text-sm font-medium text-gray-700"
                  >
                    <option value="">Sort By</option>
                    <option value="Individual">In Progress</option>
                    <option value="Project">Completed</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <button className="px-4 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-10 cursor-pointer">
                  + New Project
                </button>
              </div>
            </div>
          </section>
          <section className="mt-4 grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="relative">
              <div className="absolute right-5 top-5 z-10">
                <img
                  src={voodoodoll}
                  alt="Voodoo Doll"
                  className="object-cover h-12 w-12"
                  title="group logo"
                />
              </div>
              <div className="border-2 border-gray-300 p-4 bg-linear-to-br from-white to-red-400 rounded-xl shadow-sm">
                <h1 className="font-semibold text-xl">Website Developing</h1>
                <div className="mt-6">
                  <p className="text-gray-600">Project Description:</p>
                  <p className="mt-2 text-gray-800">
                    This project involves developing a responsive website using
                    modern web technologies such as React, Tailwind CSS, and
                    Node.js.
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600">Progress:</p>
                  <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <p className="mt-2 text-gray-800">70% Completed</p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600">Team Members:</p>
                  <div className="flex mt-2 gap-x-8">
                    <div className="flex items-center gap-x-4">
                      <img
                        src={jd}
                        alt="Jane Doe"
                        className="w-8 h-8 rounded-full"
                      />
                      <h1 className="text-lg font-medium">Jane Doe</h1>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <img
                        src={nd}
                        alt="Nicole Demara"
                        className="w-8 h-8 rounded-full"
                      />
                      <h1 className="text-lg font-medium">Nicole Demara</h1>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-300 p-4 bg-linear-to-br from-white to-blue-700 rounded-xl shadow-sm">
              Grid 2
            </div>
            <div className="border-2 border-gray-300 p-4 bg-white rounded-xl shadow-sm">
              Grid 3
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Project;
