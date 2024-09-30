import { Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import RankPage from "./pages/Rank";

const RouterList = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/rank",
    element: <RankPage />,
  },

  { path: "/", element: <Navigate to="home" /> },
];

export default RouterList;
