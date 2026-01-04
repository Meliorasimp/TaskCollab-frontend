import { useRoutes } from "react-router-dom";
import { routes } from "./routes/index.tsx";
function App() {
  const router = useRoutes(routes);
  return <>{router}</>;
}

export default App;
