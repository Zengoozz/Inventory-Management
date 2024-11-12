import CardItem from "./CardItem"
import { CardsListData } from "./CardsData"

const CardsList = () => {
  return (
    <div className="grid grid-cols-[20fr_11fr] gap-[1.375rem]">
        {CardsListData.map(c => (
            <CardItem cardData={c} />
        ))}
    </div>
  )
}

export default CardsList