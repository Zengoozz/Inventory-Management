import { PathObject } from "../../assets/Data/iconsSvgPath";
import { v4 as uuidv4 } from "uuid";

const IconFactory = (props: PathObject) => {
   const grayLevel = `text-gray-${props.grayLevel}`;
   const bluishHover = props.hoverBlueShade ? "group-hover:text-blue-500" : "";
   const bluishFocus = props.focusBlueShade ? "group-focus-within:text-blue-500" : "";
   const width = props.width != null && props.height != null ? props.width : 24;
   const height = props.width != null && props.height != null ? props.height : 24;

   const classList = `${grayLevel} ${bluishHover} ${bluishFocus}`;
   const fill = `${props.fill ? "currentColor" : "none"}`;
   const stroke = `${props.stroke ? "currentColor" : "none"}`;

   return (
      <>
         <svg
            className={`inline-block ${classList}`}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            stroke="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            {props.path.length > 1 ? (
               props.path.map((p) => (
                  <path
                     key={uuidv4()}
                     d={p}
                     fill={fill}
                     stroke={stroke}
                     strokeWidth="1.2"
                  />
               ))
            ) : (
               <path
                  key={uuidv4()}
                  d={props.path[0]}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth="1.2"
               />
            )}
         </svg>
      </>
   );
};

export default IconFactory;
