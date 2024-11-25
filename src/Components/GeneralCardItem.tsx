import { CardData } from "./CardsData";
import InfoItem from "./Hero/Cards/InfoItem";
import { AreaLineComposedGraph } from "./Hero/Graph/AreaLineComposedGraph";
import { BarChartGraph } from "./Hero/Graph/BarChartGraph";
import IconFactory from "./IconFactory";
import { listOfPaths } from "./iconsSvgPath";

const GeneralCardItem: React.FC<CardData> = (props) => {
   const compPadding =
      props.Type == "S" ? "pt-5 pb-[0.813rem] px-4" : "pt-5 pb-[1.563rem] px-4";

   const listOfItemsMargin = props.Type == "O" ? "mt-[1.375rem]" : "mt-[1rem]";
   
   return (
      <div className={`${compPadding} h-full rounded-lg bg-white`}>
         <span className="flex justify-between">
            <h1 className="inline text-customXl text-gray-800 font-medium capitalize">
               {props.Title}
            </h1>
            {props.Type == "GB" && <RearButton />}
         </span>
         {/* #NOTE: Graph */}
         {props.Type == "GB" && <BarChartGraph {...props} />}

         {props.Type == "GC" && <AreaLineComposedGraph {...props} />}
         {/* #NOTE: Not Graph */}
         {!props.Type.includes("G") && (
            <div className={`flex justify-between mt- ${listOfItemsMargin}`}>
               {props.Icons &&
                  props.Icons.map((c, index) => (
                     <>
                        <InfoItem
                           order={index}
                           length={(props.Icons?.length ?? 1) - 1}
                           icon={c}
                           type={props.Type}
                        />
                        {index != (props.Icons?.length ?? 1) - 1 && (
                           <div className="border-r-[1px] border-gray-100" />
                        )}
                     </>
                  ))}
            </div>
         )}
      </div>
   );
};

export default GeneralCardItem;

const RearButton: React.FC = () => {
   const calendarIcon = listOfPaths.filter((c) => c.name == "calendar");

   return (
      <button className="flex px-4 py-[0.375rem] text-gray-600 text-base font-medium border-2 border-gray-100 rounded-[4px] duration-150 hover:border-gray-300 hover:font-semibold">
         <IconFactory {...calendarIcon[0]} />
         <span className="ml-2 capitalize">weekly</span>
      </button>
   );
};
