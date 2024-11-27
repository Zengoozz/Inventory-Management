import { CardsListData } from "../../assets/Data/CardsData";
import GeneralCardItem from "../ComponentsFactory/GeneralCardItem";
import { v4 as uuidv4 } from 'uuid';

const CardsList = () => {
   return (
      <div className="grid grid-cols-[20fr_11fr] grid-rows-[10.25rem_10.25rem_22.5rem_19.25rem] gap-[1.375rem]">
         {CardsListData.map((data, index) => {
            const classStyle = index % 2 == 0 ? "col-start-1" : "col-start-2";
            return (
               <div key={uuidv4()} className={`${classStyle}`}>
                  <GeneralCardItem {...data} />
               </div>
            );
         })}
      </div>
   );
};

export default CardsList;
