import { listOfPaths } from "../../Data/iconsSvgPath";
import SidebarItem from "./SidebarItem";
import {v4 as uuidv4} from "uuid";

const SidebarItemsList = () => {
   return (
      <div className="flex flex-col justify-start items-start">
         {listOfPaths
            .filter((p) => p.sidebarItem)
            .map((p) => (
               <SidebarItem
                  key={uuidv4()}
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
