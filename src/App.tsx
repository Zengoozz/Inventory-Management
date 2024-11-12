import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
   return (
      <div className="grid grid-rows-[auto_1fr] grid-cols-[280px_1fr] min-h-screen">
         <aside
            id="side"
            className="min-h-max h-1/2 mr-1 bg-white rounded-r-lg"
         >
            <Sidebar></Sidebar>
         </aside>
         <div className="grid grid-rows-[auto_1fr] col-start-2">
            <nav
               id="Nav"
               className="bg-white top-0 z-10"
            >
               <Navbar></Navbar>
            </nav>
            <main
               id="Hero"
               className="h-min px-8 pt-5"
            >
               <Hero></Hero>
            </main>
         </div>
      </div>
   );
}

export default App;
