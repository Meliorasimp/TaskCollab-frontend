import { useParams } from "react-router-dom";
const Task = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Hello, {username}</h1>
    </div>
  );
};

export default Task;
