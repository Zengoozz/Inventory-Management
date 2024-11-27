import { CardData } from "../CardsData";
import { v4 as uuidv4 } from "uuid";

const Table: React.FC<CardData> = ({ TableData }) => {
   const renderedHeaders =
      TableData?.HeaderFlag == true &&
      TableData?.Headers.map((header: string) => (
         <th
            key={uuidv4()}
            className="py-[0.688rem] text-sm font-medium text-center text-gray-600 capitalize"
         >
            {header}
         </th>
      ));

   const renderedRows = TableData?.Elements.map((list: string[], index: number) => (
      <tr key={index} className="">
         {list.map((element: string, index: number) => {
            const borderStyle =
               index != list.length && "border-b-[1px] border-b-gray-200";
            return (
               <td
                  key={uuidv4()}
                  className={`${borderStyle} font-medium text-sm text-center text-[#666] py-[1.375rem] capitalize`}
               >
                  {element}
               </td>
            );
         })}
      </tr>
   ));

   return (
      <table className="mt-5 w-full">
         {TableData?.HeaderFlag == true && (
            <thead className="w-full">
               <tr className="border-y-[1px] border-y-gray-200">
                  {renderedHeaders}
               </tr>
            </thead>
         )}

         <tbody>{renderedRows}</tbody>
      </table>
   );
};

export default Table;
