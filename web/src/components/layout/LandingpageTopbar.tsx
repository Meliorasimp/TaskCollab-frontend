import Bird from "../../assets/bird.png";
import { setIsLoginModalOpen } from "../../store/Landingpage";
import { useDispatch } from "react-redux";
const LandingpageTopbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="bg-gray-300 p-4 text-black flex items-center px-30 sticky top-0 z-50 shadow-md justify-between">
      <div className="flex items-center space-x-2 mr-20">
        <img src={Bird} alt="Bird logo" className="h-8 w-8" />
        <h1 className="text-lg">Automa</h1>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-x-16 text-md font-semibold">
          <h1 className="cursor-pointer border-b-2 border-transparent hover:border-black">
            Home
          </h1>
          <h1 className="cursor-pointer border-b-2 border-transparent hover:border-black">
            About
          </h1>
          <h1 className="cursor-pointer border-b-2 border-transparent hover:border-black">
            Contact
          </h1>
        </div>
        <div className="text-md flex items-center font-semibold">
          <h1
            className="cursor-pointer border-b-2 border-transparent hover:border-black"
            onClick={() => dispatch(setIsLoginModalOpen(true))}
          >
            Login
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default LandingpageTopbar;
