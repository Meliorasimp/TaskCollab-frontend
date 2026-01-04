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
import { useState, useEffect, useRef } from "react";
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

  // Parallax scroll state and refs
  const [scrollY, setScrollY] = useState(0);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const slide4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Use passive listener for better mobile performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax transforms for each slide
  const getSlideTransform = (slideNumber: number) => {
    const viewportHeight = window.innerHeight;
    const slideStart = viewportHeight * (slideNumber - 1);
    const slideProgress = Math.max(
      0,
      Math.min(1, (scrollY - slideStart) / viewportHeight)
    );

    // Apply different transform rates for parallax effect
    const translateY = slideProgress * 50; // Adjust multiplier for stronger/weaker effect
    const opacity = 1 - slideProgress * 0.3; // Fade slightly as user scrolls past

    return {
      transform: `translateY(${translateY}px)`,
      opacity: Math.max(0.7, opacity),
    };
  };
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
        <div
          ref={slide1Ref}
          className="sticky top-0 h-screen flex flex-col items-center justify-center"
          style={getSlideTransform(1)}
        >
          <img
            src={Landingpageimage}
            alt="Landing Page"
            className="w-full h-full absolute top-0 left-0 object-cover image-darken"
          />
          <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white text-center mb-4 sm:mb-6 leading-tight">
              Work Together.{" "}
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Achieve More.
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 text-center max-w-3xl mx-auto font-light leading-relaxed">
              A collaborative platform designed to keep your team synchronized,
              productive, and focused on what truly matters.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                onClick={() => dispatch(setIsLoginModalOpen(true))}
              >
                Get Started
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div
          ref={slide2Ref}
          className="sticky top-0 h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 text-black px-4 sm:px-6 md:px-8"
          style={getSlideTransform(2)}
        >
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </h1>
            <p className="mb-8 sm:mb-12 md:mb-16 text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto px-4">
              Everything your team needs for seamless collaboration
            </p>

            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
              {/* Left Arrow - Hidden on mobile */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="hidden md:block p-3 md:p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 flex-shrink-0"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl">
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
                      className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                    >
                      <motion.div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
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
                          className="w-14 h-14 sm:w-18 sm:h-18"
                        />
                      </motion.div>
                      <motion.h2
                        className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      >
                        {feature.title}
                      </motion.h2>
                      <motion.p
                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
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

              {/* Right Arrow - Hidden on mobile */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="hidden md:block p-3 md:p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 flex-shrink-0"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
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

            {/* Pagination dots for mobile/tablet */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8 md:hidden">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentPage === index
                      ? "bg-indigo-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          ref={slide3Ref}
          className="sticky top-0 h-screen flex flex-col items-center justify-center bg-linear-to-b from-purple-800 to-pink-800 text-white px-4 sm:px-6 md:px-8"
          style={getSlideTransform(3)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            The Third Slide
          </h2>
          <p className="mt-2 text-base sm:text-lg text-center">
            On Progress...
          </p>
        </div>
        <div
          ref={slide4Ref}
          className="sticky top-0 h-screen flex flex-col items-center justify-center bg-linear-to-b from-blue-200 to-indigo-100 text-black px-4 sm:px-6 md:px-8"
          style={getSlideTransform(4)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            The Fourth Slide
          </h2>
        </div>
      </div>
      {isLoginModalOpen && <Login />}
      {isRegisterModalOpen && <Register />}
    </div>
  );
};

export default Home;
