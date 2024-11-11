import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
   return (
      <section id="Main" className="grid grid-cols-[250px] grid-rows-[auto_1fr] min-h-screen">
         <section id="side" className="mr-1 bg-white row-span-2">
            <Sidebar></Sidebar>
         </section>
         <section id="Nav" className="bg-white col-start-2 top-0 z-10">
            <Navbar></Navbar>
         </section>
         <section id="Hero" className="col-start-2 pl-8 pt-5">
            <Hero></Hero>
         </section>
      </section>
   );
}

export default App;
