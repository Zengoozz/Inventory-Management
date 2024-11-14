import { CardData } from "./CardsData";
import InfoItem from "./InfoItem";

type props = {
   cardData: CardData;
};

const CardItem = (props: props) => {
   return (
      <div className="pt-5 pb-[1.563rem] px-4 rounded-lg bg-white">
         <h1 className="inline text-customXl font-medium capitalize">{props.cardData.Title}</h1>
         <div className="mt-[1.375rem] flex justify-between">
            {props.cardData.Icons.map((c, index) => (
               <>
                  <InfoItem
                     order={index}
                     length={props.cardData.Icons.length - 1}
                     icon={c}
                  />
                  {index != props.cardData.Icons.length - 1 && (
                     <div className="border-r-[1px] border-gray-100" />
                  )}
               </>
            ))}
         </div>
      </div>
   );
};

export default CardItem;
