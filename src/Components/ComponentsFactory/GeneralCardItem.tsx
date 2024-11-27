import { CardData } from "../../assets/Data/CardsData";
import InfoItem from "../Dashboard/Cards/InfoItem";
import { AreaLineComposedGraph } from "../Dashboard/Graph/AreaLineComposedGraph";
import { BarChartGraph } from "../Dashboard/Graph/BarChartGraph";
import IconFactory from "./IconFactory";
import { listOfPaths } from "../../assets/Data/iconsSvgPath";
import Table from "./Table";
import ItemsGrid from "./ItemsGrid";

const GeneralCardItem: React.FC<CardData> = (props) => {
   // #NOTE: Styles
   const compPadding =
      props.Type == "S" ? "pt-5 pb-[0.813rem] px-4" : "pt-5 pb-[1.563rem] px-4";

   const listOfItemsMargin = props.Type == "O" ? "mt-[1.375rem]" : "mt-[1rem]";

   // #NOTE: HelperComponenets

   const GraphRearButton: React.FC = () => {
      const calendarIcon = listOfPaths.filter((c) => c.name == "calendar");
   
      return (
         <button className="flex px-4 py-[0.375rem] text-gray-600 text-base font-medium border-2 border-gray-100 rounded-[4px] duration-150 hover:border-gray-300 hover:font-semibold">
            <IconFactory {...calendarIcon[0]} />
            <span className="ml-2 capitalize">weekly</span>
         </button>
      );
   };
   
   const SeeAllButton: React.FC = () => {
      return (
         <button className="text-blue-700 text-sm font-normal border-none duration-150 hover:font-semibold hover:text-blue-900 hover:underline">
            <span className="capitalize">see all</span>
         </button>
      );
   };

   return (
      <div className={`${compPadding} h-full rounded-lg bg-white`}>
         <span className="flex justify-between">
            <h1 className="inline text-customXl text-gray-800 font-medium capitalize">
               {props.Title}
            </h1>
            {props.Type == "GB" && <GraphRearButton />}
            {props.Type.includes("S") && <SeeAllButton />}
         </span>

         {/* #NOTE: Overview & Summary */}
         {!props.Type.includes("G") && (
            <div className={`flex justify-between ${listOfItemsMargin}`}>
               {props.Icons &&
                  props.Icons.map((c, index) => (
                     <>
                        <InfoItem
                           key={index}
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

         {/* #NOTE: Graph */}
         {props.Type == "GB" && ( // #LATER: ResponsiveContainer Resizing
            <BarChartGraph {...props} />
         )}

         {props.Type == "GC" && ( // #LATER: ResponsiveContainer Resizing
            <AreaLineComposedGraph {...props} />
         )}

         {/* #NOTE: Table */}
         {props.Type == "ST" && ( // #LATER: ResponsiveContainer Resizing
            <Table {...props} />
         )}

         {/* #NOTE: Table */}
         {props.Type == "SI" && ( // #LATER: ResponsiveContainer Resizing
            <ItemsGrid {...props} />
         )}
         
      </div>
   );
};

export default GeneralCardItem;



// interface graphProps {
//    children: ReactElement;
//    width: number;
//    height: number;
// }

// const GraphResponsiveContainer: React.FC<graphProps> = (props) => {
//    // #DEBUG: ResponsiveContainer Resizing
//    return (
//       <ResponsiveContainer
//          width="100%"
//          height="100%"
//          maxHeight={260}
//          className={"mt-[1.625rem]"}
//       >
//          {props.children}
//       </ResponsiveContainer>
//    );
// };
