import { CardData } from "./CardsData";
import InfoItem from "./InfoItem";

type props = {
   cardData: CardData;
};

const CardItem = (props: props) => {
   return (
      <div className="pt-5 pb-[1.563rem] px-4 rounded-lg bg-white">
         <h1 className="inline text-xl font-medium capitalize">{props.cardData.Title}</h1>
         <InfoItem
            Name={props.cardData.Icons[0].Name}
            Icon={props.cardData.Icons[0].Icon}
         />
      </div>
   );
};

export default CardItem;
