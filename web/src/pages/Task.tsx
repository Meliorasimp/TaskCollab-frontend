import { useParams } from "react-router-dom";
import MainNavbar from "../components/layout/MainNavbar";
import TaskTopbar from "../components/layout/TaskTopbar";
const Task = () => {
  const { username } = useParams();
  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      <MainNavbar />
      <div className="w-full flex flex-col overflow-hidden">
        <TaskTopbar />
        <h1 className="text-2xl font-semibold p-6">Tasks for {username}</h1>
      </div>
    </div>
  );
};

export default Task;
