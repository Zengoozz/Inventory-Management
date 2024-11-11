import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
   return (
      <div className="grid grid-cols-[250px] grid-rows-[auto_1fr] min-h-screen">
         <aside id="side" className="mr-1 bg-white row-span-2">
            <Sidebar></Sidebar>
         </aside>
         <nav id="Nav" className="bg-white col-start-2 top-0 z-10">
            <Navbar></Navbar>
         </nav>
         <main id="Hero" className="col-start-2 pl-8 pt-5">
            <Hero></Hero>
         </main>
      </div>
   );
}

export default App;
