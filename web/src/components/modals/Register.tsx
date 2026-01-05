import {
  setIsLoginModalOpen,
  setIsRegisterModalOpen,
} from "../../store/Landingpage";
import { setUserName, setEmail, setPassword } from "../../store/Register";
import { useDispatch, useSelector } from "react-redux";
import Google from "../../assets/google.png";
import Bird from "../../assets/bird.png";
import Abstract1 from "../../assets/abstract1.jpg";
import { useMutation } from "@apollo/client/react";
import CreateUser from "../../GraphQL/UserMutations/RegisterUser.gql";
import type { RootState } from "../../store";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const override: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const [RegisterUser, { loading }] = useMutation(CreateUser);
  const { username, email, password } = useSelector(
    (state: RootState) => state.register
  );
  const RegisterUserInput = {
    username,
    email,
    password,
  };
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!username || !email || !password) {
        toast.error("Please fill in all fields");
        return;
      }
      const response = await RegisterUser({
        variables: { input: RegisterUserInput },
      });
      if (response && response.data) {
        const data = response.data as {
          registerUser: {
            username?: string;
            success: boolean;
            error?: string;
          };
        };
        const { success, error } = data.registerUser;

        if (success) {
          toast.success("Registration Successful! You can now log in.");
          dispatch(setIsRegisterModalOpen(false));
          dispatch(setIsLoginModalOpen(true));
          dispatch(setUserName(""));
          dispatch(setEmail(""));
          dispatch(setPassword(""));
        } else {
          toast.error(error || "Registration failed");
        }
      }
    } catch (e) {
      const error = e as {
        graphQLErrors?: Array<{ message: string }>;
        message?: string;
      };
      const errorMessage =
        error?.graphQLErrors?.[0]?.message ||
        error?.message ||
        "Registration failed";
      toast.error(errorMessage);
    }
  };
  const dispatch = useDispatch();
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => dispatch(setIsRegisterModalOpen(false))}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg w-2/3 z-50 h-5/6 overflow-y-auto flex items-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {loading && (
          <div>
            <ClipLoader cssOverride={override} />
          </div>
        )}
        <div className="w-3/5 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">Create your Automa Account</h1>
          <p className="mt-4 text-gray-500 text-sm w-3/4 text-center">
            By Creating a new account, you are eligible to use all of Automa's
            features
          </p>
          <form
            className="mt-4 w-full flex flex-col items-center gap-y-3"
            onSubmit={handleRegister}
          >
            <label className="text-gray-700 text-left w-3/4">Username</label>
            <input
              type="text"
              placeholder="XxJohnDoexX"
              className="border border-gray-300 rounded-md p-2 w-3/4"
              value={username}
              onChange={(e) => dispatch(setUserName(e.target.value))}
            />
            <label className="text-gray-700 text-left w-3/4">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="border border-gray-300 rounded-md p-2 w-3/4"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <label className="text-gray-700 text-left w-3/4">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded-md p-2 w-3/4"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
            <button
              type="submit"
              className="bg-purple-700 text-white rounded-md px-4 py-2 hover:bg-purple-800 w-3/4 mt-2 cursor-pointer"
            >
              Register
            </button>
          </form>
          <div className="flex items-center w-3/4 mt-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="mx-4 text-sm text-gray-500">Or</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <button className="border border-gray-300 rounded-md px-4 py-2 w-3/4 mt-4 flex items-center justify-center gap-x-2 hover:bg-gray-100 cursor-pointer">
            <img src={Google} alt="Google Logo" className="w-5 h-5" />
            <span className="text-sm text-gray-700">Register with Google</span>
          </button>
        </div>
        <div className="w-2/5 bg-linear-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-l-2xl h-full relative overflow-hidden flex items-center justify-center">
          <img
            src={Abstract1}
            alt="Abstract Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-transparent to-indigo-900/40"></div>

          <div className="flex flex-col w-full h-full absolute justify-center items-center px-8 z-10">
            {/* Logo section with glassmorphism */}
            <div className="flex items-center justify-center mb-12 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/20">
              <img
                src={Bird}
                alt="Bird"
                className="w-12 h-12 mr-3 drop-shadow-lg"
              />
              <h1 className="text-2xl font-bold text-white tracking-wide">
                Automa
              </h1>
            </div>

            {/* Feature card with glassmorphism */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 w-full max-w-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold text-white text-center mb-3">
                Get Started
              </h2>
              <p className="text-white/90 text-center text-sm leading-relaxed">
                Collaborate with other users and manage your tasks efficiently
                with powerful tools.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
