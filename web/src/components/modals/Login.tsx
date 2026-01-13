import {
  setIsLoginModalOpen,
  setIsRegisterModalOpen,
} from "../../store/Landingpage";
import { useDispatch, useSelector } from "react-redux";
import Google from "../../assets/google.png";
import Loginimage from "../../assets/loginimage.jpg";
import Bird from "../../assets/bird.png";
import { motion } from "framer-motion";
import { useMutation } from "@apollo/client/react";
import loginUser from "../../GraphQL/UserMutations/loginUser.gql";
import type React from "react";
import { setEmail, setPassword } from "../../store/Login";
import type { RootState } from "../../store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { email, password } = useSelector((state: RootState) => state.login);
  const [loginUserMutation] = useMutation(loginUser);
  console.log(email, password);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await loginUserMutation({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    });
    if (response && response.data) {
      const data = response.data as {
        loginUser: {
          username?: string;
          success: boolean;
          error?: string;
          token?: string;
        };
      };
      if (data.loginUser.success && data.loginUser.token) {
        localStorage.setItem("token", data.loginUser.token);
        localStorage.setItem("username", data.loginUser.username || "");
        toast.success("Login Successful!");
        dispatch(setEmail(""));
        dispatch(setPassword(""));
        dispatch(setIsLoginModalOpen(false));
        nav("/dashboard");
      } else if (data.loginUser.error) {
        toast.error(data.loginUser.error);
      }
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => dispatch(setIsLoginModalOpen(false))}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg w-2/3 z-50 h-5/6 overflow-y-auto flex items-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-2/5 bg-purple-700 rounded-l-2xl h-full relative overflow-hidden">
          <img
            src={Loginimage}
            loading="lazy"
            alt="Login"
            className="rounded-l-2xl h-full w-full object-cover absolute"
          />
          <div className="flex flex-col w-full h-full absolute justify-center items-center">
            <img src={Bird} alt="Bird" className="w-32 h-32" />
            <p className="mt-10 text-white font-semibold text-2xl w-3/4 text-center">
              A Platform for Task Collaboration
            </p>
          </div>
        </div>
        <div className="w-3/5 flex flex-col pl-10 pr-10 pb-10 items-center">
          <h1 className="text-4xl font-semibold">Welcome Back!</h1>
          <p className="mt-4 text-gray-500 text-sm">
            Login to your account to continue Task Collaboration with your team.
          </p>
          <form
            className="mt-4 w-full flex flex-col items-center"
            onSubmit={handleLogin}
          >
            <label className="text-gray-700 mb-2 text-left w-3/4">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-md p-2 w-3/4"
              onChange={(e) => dispatch(setEmail(e.target.value))}
              value={email}
            />

            <label className="text-gray-700 mb-2 mt-4 text-left w-3/4">
              Password
            </label>
            <input
              type="password"
              className="border border-gray-300 rounded-md p-2 w-3/4"
              onChange={(e) => dispatch(setPassword(e.target.value))}
              value={password}
            />
            <button
              type="submit"
              className="bg-purple-700 text-white rounded-md px-4 py-2 hover:bg-purple-800 w-3/4 mt-6 cursor-pointer"
            >
              Login
            </button>
            <div className="flex items-center w-3/4 mt-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="mx-4 text-sm text-gray-500">Or</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <button
              type="button"
              className="border border-purple-700 text-purple-700 rounded-md px-4 py-2 hover:bg-purple-100 w-3/4 mt-2 cursor-pointer"
            >
              <img
                src={Google}
                alt="Google logo"
                className="inline h-5 w-5 mr-2"
              />
              Login with Google
            </button>
            <p className="mt-4 text-gray-500 text-sm">
              Don't have an account?{" "}
              <span
                className="text-purple-700 cursor-pointer"
                onClick={() => {
                  dispatch(setIsRegisterModalOpen(true));
                  dispatch(setIsLoginModalOpen(false));
                }}
              >
                Register Now.
              </span>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
