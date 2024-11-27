import { listOfPaths } from "../iconsSvgPath"
import SidebarItem from "./SidebarItem"
import {v4 as uuidv4} from "uuid";


const SidebarFooterItems = () => {
  return (
    <div className="mt-[17.5rem] mb-8 flex flex-col items-start">
         {listOfPaths
            .filter((p) => p.sidebarFooterItem)
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
  )
}

export default SidebarFooterItems