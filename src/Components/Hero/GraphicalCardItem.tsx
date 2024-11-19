import IconFactory from "../IconFactory";
import { listOfPaths } from "../iconsSvgPath";
import { CardData } from "./CardsData";
import { BarChartGraph } from "./Graph/BarChartGraph";

const GraphicalCardItem: React.FC<CardData> = (props) => {
   const compPadding =
      props.Type == "O"
         ? "pt-5 pb-[1.563rem] px-4"
         : props.Type == "S"
         ? "pt-5 pb-[0.813rem] px-4"
         : "pt-5 pb-[1.563rem] px-4";

   const calendarIcon = listOfPaths.filter((c) => c.name == "calendar");

   return (
      <div className={`${compPadding} h-full rounded-lg bg-white`}>
         <span className="flex justify-between">
            <h1 className="inline text-customXl text-gray-800 font-medium capitalize">
               {props.Title}
            </h1>
            <button className="flex px-4 py-[0.375rem] text-gray-600 text-base font-medium border-2 border-gray-100 rounded-[4px] duration-150 hover:border-gray-300 hover:font-semibold">
               <IconFactory {...calendarIcon[0]} />
               <span className="ml-2 capitalize">weekly</span>
            </button>
         </span>
         <>{props.Type == "G" && <BarChartGraph {...props} />}</>
      </div>
   );
};

export default GraphicalCardItem;
