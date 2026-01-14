import MainNavbar from "../components/layout/MainNavbar";
import MainTopbar from "../components/layout/MainTopbar";
import nd from "../assets/nd.jpg";
import jd from "../assets/jd.webp";
import g1 from "../assets/g1.jpg";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { setTeamModalOpen } from "../store/Team";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
const CreateTeam = lazy(() => import("../components/modals/CreateTeam"));
const Team = () => {
  const dispatch = useDispatch();
  const TeamModalState = useSelector(
    (state: RootState) => state.createTeam.isCreateTeamModalOpen
  );
  return (
    <div className="min-h-screen flex bg-gray-100">
      <MainNavbar />
      <div className="w-full flex flex-col ml-56">
        <MainTopbar />
        <main className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Teams</h1>
              <p className="text-gray-500">Manage your teams</p>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium flex items-center gap-2"
              onClick={() => dispatch(setTeamModalOpen(true))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Create Team
            </button>
          </div>

          {/* Filters/Search */}
          <div className="flex gap-3 mb-4">
            <input
              type="search"
              placeholder="Search teams..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>All Teams</option>
              <option>Active</option>
              <option>Archived</option>
            </select>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-md border-2 border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Team
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Members
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Projects
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Last Active
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Row 1 */}
                <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">
                        V
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Voodoo</p>
                        <p className="text-sm text-gray-500">
                          Creating Scalable Web App
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <img
                          src={nd}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                        <img
                          src={jd}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                        <img
                          src={g1}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-800 font-medium">1</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      Owner
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">2 hours ago</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="size-5 text-gray-600">...</svg>
                    </button>
                  </td>
                </tr>
                {/* More rows... */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      {TeamModalState && (
        <AnimatePresence>
          <Suspense
            fallback={<div className="absolute inset-0">Loading...</div>}
          >
            <CreateTeam />
          </Suspense>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Team;
