import { PathObject } from "./iconsSvgPath";

const IconFactory = (props: PathObject) => {

   const grayLevel = `text-gray-${props.grayLevel}`;
   const bluishHover = props.hoverBlueShade ? "group-hover:text-blue-500" : "";
   const classList = grayLevel + " " + bluishHover;
   const fill = `${props.fill ? "currentColor" : "none"}`
   const stroke = `${props.stroke ? "currentColor" : "none"}`

   return (
      <>
         <svg
            className={`inline-block hover:cursor-pointer ${classList}`}
            width={`${props.width != null && props.height != null ? props.width : 24} `}
            height={`${props.width != null && props.height != null ? props.height : 24} `}
            viewBox="0 0 24 24"
            stroke="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            {props.path.length > 1 ? (
               props.path.map((p) => (
                  <path
                     d={p}
                     fill={fill}
                     stroke={stroke}
                     stroke-width="1.2"
                  />
               ))
            ) : (
               <path
                  d={props.path[0]}
                  fill={fill}
                  stroke={stroke}
                  stroke-width="1.2"
               />
            )}
         </svg>
      </>
   );
};

export default IconFactory;
