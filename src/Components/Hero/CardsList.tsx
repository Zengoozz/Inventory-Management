import CardItem from "./CardItem";
import { CardsListData } from "./CardsData";

const CardsList = () => {
   return (
      <div className="grid grid-cols-[20fr_11fr] grid-rows-[10.25rem_10.25rem] gap-[1.375rem]">
         {CardsListData.map((c) => {
            if (c.Type == "O") {
               return (
                  <div className="col-start-1">
                     <CardItem cardData={c} />
                  </div>
               );
            }
            if(c.Type == "S"){
              return (
                <div className="col-start-2">
                   <CardItem cardData={c} />
                </div>
             );
            }
         })}
      </div>
   );
};

export default CardsList;

// {
//   if (c.Type == "O") {
//      return (
//         <div className="col-start-1">
//            <CardItem cardData={c} />
//         </div>
//      );
//   }
// }
