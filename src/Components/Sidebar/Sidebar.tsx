import { listOfPaths } from "../iconsSvgPath";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
   return (
      <>
         <div className="flex flex-col justify-start items-start mx-10">
            {listOfPaths
               .filter((p) => p.sidebarItem)
               .map((p) => (
                  <SidebarItem
                     name={p.name}
                     path={p.path}
                     grayLevel={p.grayLevel}
                     hoverBlueShade={p.hoverBlueShade}
                     fill={p.fill}
                     stroke={p.stroke}
                  />
               ))}
         </div>
      </>
   );
};

export default Sidebar;
