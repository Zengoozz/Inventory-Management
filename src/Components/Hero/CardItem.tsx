import { CardData } from "./CardsData";
import InfoItem from "./InfoItem";

type props = {
   cardData: CardData;
};

const CardItem = (props: props) => {
   const compPadding =
      props.cardData.Type == "O"
         ? "pt-5 pb-[1.563rem] px-4"
         : props.cardData.Type == "S"
         ? "pt-5 pb-[0.813rem] px-4"
         : "";

   const listOfItemsMargin = props.cardData.Type == "O" ? "mt-[1.375rem]" : "mt-[1rem]";

   return (
      <div className={`${compPadding} h-full rounded-lg bg-white`}>
         <h1 className="inline text-customXl text-gray-800 font-medium capitalize">
            {props.cardData.Title}
         </h1>
         <div className={`flex justify-between mt- ${listOfItemsMargin}`}>
            {props.cardData.Icons &&
               props.cardData.Icons.map((c, index) => (
                  <>
                     <InfoItem
                        order={index}
                        length={(props.cardData.Icons?.length ?? 1) - 1}
                        icon={c}
                        type={props.cardData.Type}
                     />
                     {index != (props.cardData.Icons?.length ?? 1) - 1 && (
                        <div className="border-r-[1px] border-gray-100" />
                     )}
                  </>
               ))}
         </div>
      </div>
   );
};

export default CardItem;
