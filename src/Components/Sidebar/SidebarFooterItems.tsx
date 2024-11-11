import { listOfPaths } from "../iconsSvgPath"
import SidebarItem from "./SidebarItem"

const SidebarFooterItems = () => {
  return (
    <div className="flex flex-col h-screen justify-end items-start">
         {listOfPaths
            .filter((p) => p.sidebarFooterItem)
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
  )
}

export default SidebarFooterItems