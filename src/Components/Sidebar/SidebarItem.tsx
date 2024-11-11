import IconFactory from "../IconFactory";
import { PathObject } from "../iconsSvgPath";

const SidebarItem = (props: PathObject) => {
   return (
      <span className="my-3 flex justify-center text-lg font-medium text-gray-600 group hover:cursor-pointer">
         <IconFactory
            name={props.name}
            path={props.path}
            grayLevel={props.grayLevel}
            hoverBlueShade={props.hoverBlueShade}
            fill={props.fill}
            stroke={props.stroke}
         />
         <p className="group-hover:text-blue-500 ml-2 capitalize">{props.name}</p>
      </span>
   );
};

export default SidebarItem;
