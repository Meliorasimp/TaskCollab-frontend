import "../styles/index.css";
import LandingpageTopbar from "../components/layout/LandingpageTopbar";
import Landingpageimage from "../assets/Landingpage-image.jpg";
import TaskManagement from "../assets/clipboard.png";
import Collaboration from "../assets/collaboration.png";
import Progress from "../assets/progress.png";
import ProjectOrg from "../assets/closure.png";
import UserManagement from "../assets/profile.png";
import RealtimeUpdate from "../assets/real-time.png";
import Integration from "../assets/integration.png";
import Analytics from "../assets/analysis.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setIsLoginModalOpen } from "../store/Landingpage";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/modals/Login";
import Register from "../components/modals/Register";
import type { RootState } from "../store";
const Home = () => {
  const dispatch = useDispatch();
  const { isLoginModalOpen, isRegisterModalOpen } = useSelector(
    (state: RootState) => state.landingpage
  );
  console.log("login modal state", isLoginModalOpen);
  const featuresData = [
    {
      id: "1",
      img: TaskManagement,
      title: "Task Management",
      alt: "Task Management SVG Icon",
      description:
        "Organize, assign, and track tasks with ease using our intuitive task management tools.",
    },
    {
      id: "2",
      img: Collaboration,
      title: "Real-time Collaboration",
      alt: "Real-time Collaboration SVG Icon",
      description:
        "Work together seamlessly with live updates, instant notifications, and team chat.",
    },
    {
      id: "3",
      img: Progress,
      title: "Progress Tracking",
      alt: "Progress Tracking SVG Icon",
      description:
        "Monitor team performance with visual dashboards and detailed analytics reports.",
    },
    {
      id: "4",
      img: ProjectOrg,
      title: "Project Organization",
      alt: "Project Organization SVG Icon",
      description:
        "Keep all your project files, documents, and communications in one centralized location.",
    },
    {
      id: "5",
      img: UserManagement,
      title: "User Management",
      alt: "User Management SVG Icon",
      description:
        "Easily manage user roles, permissions, and access levels to ensure security and efficiency.",
    },
    {
      id: "6",
      img: RealtimeUpdate,
      title: "Real-time Updates",
      alt: "Real-time Updates SVG Icon",
      description:
        "Stay informed with instant updates on task changes, deadlines, and team activities.",
    },
    {
      id: "7",
      img: Integration,
      title: "Third-party Integrations",
      alt: "Third-party Integrations SVG Icon",
      description:
        "Connect with popular tools and services to streamline your workflow and enhance productivity.",
    },
    {
      id: "8",
      img: Analytics,
      title: "Analytics & Reporting",
      alt: "Analytics & Reporting SVG Icon",
      description:
        "Gain insights into team performance and project progress with comprehensive analytics and reporting features.",
    },
  ];
  const dataPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * dataPerPage;
  const dataToShow = featuresData.slice(startIndex, startIndex + dataPerPage);
  const totalPages = Math.ceil(featuresData.length / dataPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="main-bg-color">
      <LandingpageTopbar />
      <div className="relative">
        {/* First Slide - Landing Page */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          <img
            src={Landingpageimage}
            alt="Landing Page"
            className="w-full h-full absolute top-0 left-0 object-cover image-darken"
          />
          <div className="relative z-10 px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 leading-tight">
              Work Together.{" "}
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Achieve More.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-gray-200 text-center max-w-3xl mx-auto font-light leading-relaxed">
              A collaborative platform designed to keep your team synchronized,
              productive, and focused on what truly matters.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <button
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                onClick={() => dispatch(setIsLoginModalOpen(true))}
              >
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 text-black px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="mb-4 text-5xl md:text-6xl font-bold text-center bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </h1>
            <p className="mb-16 text-xl text-gray-600 text-center max-w-2xl mx-auto">
              Everything your team needs for seamless collaboration
            </p>

            <div className="flex items-center justify-center gap-8">
              {/* Left Arrow */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {dataToShow.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -50, scale: 0.9 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                    >
                      <motion.div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <img
                          src={feature.img}
                          alt={feature.alt}
                          className="w-18 h-18"
                        />
                      </motion.div>
                      <motion.h2
                        className="text-2xl font-bold mb-3 text-gray-800"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      >
                        {feature.title}
                      </motion.h2>
                      <motion.p
                        className="text-gray-600 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                      >
                        {feature.description}
                      </motion.p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-linear-to-b from-purple-800 to-pink-800 text-white">
          <h2 className="text-4xl font-bold">The Third Slide</h2>
          <p className="mt-2">On Progress...</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-linear-to-b from-blue-200 to-indigo-100 text-black">
          <h2 className="text-4xl font-bold">The Fourth Slide</h2>
        </div>
      </div>
      {isLoginModalOpen && <Login />}
      {isRegisterModalOpen && <Register />}
    </div>
  );
};

export default Home;
