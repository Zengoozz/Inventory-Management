import Logo from "../../assets/Images/tic-tac-toe.png";
import SidebarItemsList from "./SidebarItemsList";
import SidebarFooterItems from "./SidebarFooterItems";

const Sidebar = () => {
   return (
      <div className="mx-6 mt-7">
         <span className="mb-8 flex items-center">
            <img
               src={Logo}
               width={45}
               height={45}
            />
            <p className="ml-3 font-bold text-customXl  text-blue-500 uppercase">
               tic-tac
            </p>
         </span>
         <SidebarItemsList />
         <SidebarFooterItems />
      </div>
   );
};

export default Sidebar;
