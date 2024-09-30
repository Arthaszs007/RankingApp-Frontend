import { useRoutes } from "react-router-dom";
import "./App.css";
import Navi from "./components/navBar/navi";

import RouterList from "./routes";
import ToastList from "./components/toast/toastList";

function App() {
  const routeList = useRoutes(RouterList);

  return (
    <div className="relative">
      {/* import the navigation com */}
      <div className="fixed bottom-0 sm:sticky sm:top-0 w-full z-20">
        <Navi />
      </div>

      {/* register the router list */}
      <div className=" mb-14 sm:mb-0"> {routeList}</div>
      <ToastList />
    </div>
  );
}

export default App;
