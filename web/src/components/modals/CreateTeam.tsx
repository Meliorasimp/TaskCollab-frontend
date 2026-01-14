import { useDispatch, useSelector } from "react-redux";
import {
  setTeamModalOpen,
  setTeamName,
  setTeamDescription,
} from "../../store/Team";
import CreateTeamIcon from "../../svg/team-work-svgrepo-com.svg";
import { motion } from "framer-motion";
import type { RootState } from "../../store";
import CREATE_TEAM_MUTATION from "../../GraphQL/TeamMutations/addTeam.gql";
import { useMutation } from "@apollo/client/react";
import type React from "react";
import toast from "react-hot-toast";

const CreateTeam = () => {
  const dispatch = useDispatch();
  const { name, description } = useSelector(
    (state: RootState) => state.createTeam
  );
  const [CreateTeam] = useMutation(CREATE_TEAM_MUTATION);

  const handleCreateTeam = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await CreateTeam({
        variables: {
          input: {
            name,
            description,
          },
        },
      });
      if (response && response.data) {
        toast.success("Team created successfully!");
      }
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      dispatch(setTeamModalOpen(false));
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={() => dispatch(setTeamModalOpen(false))}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg z-50 overflow-hidden relative"
        initial={{ scale: 0.9, opacity: 0, y: 0 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section with Gradient Background */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
              <img
                src={CreateTeamIcon}
                alt="Create Team Icon"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Create Your Team
              </h1>
              <p className="text-blue-100 text-sm mt-1">
                Build something amazing together
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form className="space-y-6" onSubmit={handleCreateTeam}>
            <div>
              <label
                htmlFor="teamName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Team Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="teamName"
                  onChange={(e) => dispatch(setTeamName(e.target.value))}
                  value={name}
                  placeholder="Enter team name..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
            </div>

            <div>
              <label
                htmlFor="teamDescription"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Team Description
              </label>
              <textarea
                id="teamDescription"
                rows={4}
                placeholder="What's your team all about?"
                onChange={(e) => dispatch(setTeamDescription(e.target.value))}
                value={description}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
              ></textarea>
              <p className="text-xs text-gray-500 mt-2">
                Describe your team's goals and mission
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => dispatch(setTeamModalOpen(false))}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                Create Team
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateTeam;
