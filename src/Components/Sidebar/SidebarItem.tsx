import IconFactory from "../ComponentsFactory/IconFactory";
import { PathObject } from "../../assets/Data/iconsSvgPath";
import { v4 as uuidv4 } from "uuid";

const SidebarItem = (props: PathObject) => {
   return (
      <span className="px-[6px] py-[8px] my-3 flex justify-center text-lg font-medium text-gray-600 group hover:cursor-pointer">
         <IconFactory
            key={uuidv4()}
            name={props.name}
            path={props.path}
            grayLevel={props.grayLevel}
            hoverBlueShade={props.hoverBlueShade}
            fill={props.fill}
            stroke={props.stroke}
         />
         <p className="text-base group-hover:text-blue-500 ml-3 capitalize">{props.name}</p>
      </span>
   );
};

export default SidebarItem;
