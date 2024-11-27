import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import NoMatch from "./Components/Pages/NoMatch";


const Router = () => {
   return (
      <>
         <Routes>
            <Route
               path="/"
               element={<Dashboard />}
            />
            <Route
               path="/Dashboard"
               element={<Dashboard />}
            />
            <Route
               path="/*"
               element={<NoMatch />}
            />
         </Routes>
      </>
   );
};

export default Router;
