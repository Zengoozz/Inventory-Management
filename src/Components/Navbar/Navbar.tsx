import ProfileIcon from "../../assets/Images/ProfileIcon.jpeg";
import IconFactory from "../ComponentsFactory/IconFactory";
import { listOfPaths, PathObject } from "../../assets/Data/iconsSvgPath";

const emptyPathObject = {
   name: "",
   path: [],
   grayLevel: 0,
   hoverBlueShade: false,
   fill: false,
   stroke: false,
} as PathObject;

const notifactionIconData: PathObject =
   listOfPaths.find((p) => p.name == "notification") ?? emptyPathObject;

const searchIconData: PathObject =
   listOfPaths.find((p) => p.name == "search") ?? emptyPathObject;

const Navbar = () => {
   return (
      <div className="my-7 mx-8 h-10 flex justify-between items-center">
         <span className="relative group">
            <i className="absolute left-3 top-1/2 -translate-y-1/2 group">
               <IconFactory
                  name={searchIconData.name}
                  path={searchIconData.path}
                  grayLevel={searchIconData.grayLevel}
                  hoverBlueShade={searchIconData.hoverBlueShade}
                  focusBlueShade={searchIconData.focusBlueShade}
                  fill={searchIconData.fill}
                  stroke={searchIconData.stroke}
                  width={24}
                  height={24}
               />
            </i>
            <input
               className="h-11 w-96 pl-10 pr-3 text-gray-400 border-[1px] rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Search product, supplier, order"
            ></input>
         </span>

         <span className="flex items-center">
            <span className="group mr-3 hover:cursor-pointer">
               <IconFactory
                  name={notifactionIconData.name}
                  path={notifactionIconData.path}
                  grayLevel={notifactionIconData.grayLevel}
                  hoverBlueShade={notifactionIconData.hoverBlueShade}
                  fill={notifactionIconData.fill}
                  stroke={notifactionIconData.stroke}
                  width={25}
                  height={25}
               />
            </span>

            <img
               width={45}
               height={45}
               src={ProfileIcon}
               className="duration-500 hover:scale-110 hover:cursor-pointer"
            />
         </span>
      </div>
   );
};

export default Navbar;
