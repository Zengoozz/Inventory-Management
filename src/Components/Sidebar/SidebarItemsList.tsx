import { listOfPaths } from "../iconsSvgPath";
import SidebarItem from "./SidebarItem";

const SidebarItemsList = () => {
   return (
      <div className="flex flex-col justify-start items-start">
         {listOfPaths
            .filter((p) => p.sidebarItem)
            .map((p) => (
               <SidebarItem
                  key={p.name}
                  name={p.name}
                  path={p.path}
                  grayLevel={p.grayLevel}
                  hoverBlueShade={p.hoverBlueShade}
                  fill={p.fill}
                  stroke={p.stroke}
               />
            ))}
      </div>
   );
};

export default SidebarItemsList;
