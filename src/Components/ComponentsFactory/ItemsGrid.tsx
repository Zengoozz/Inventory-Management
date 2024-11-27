import { CardData } from "../../assets/Data/CardsData";

const ItemsGrid: React.FC<CardData> = ({ Items }) => {
   return (
      <div className="mt-[0.813rem]">
         {Items?.map((item) => (
            <span className="flex justify-between items-center">
               <img
                  src={item.Image}
                  alt={item.Name}
               />
               <span>
                  <h1 className="text-base font-semibold text-gray-800 capitalize">{item.Name}</h1>
                  <p className="text-sm font-normal text-gray-500 capitalize">{item.Description}</p>
               </span>
               <button
                  className={`${item.Status == "low" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"} text-sm font-medium capitalize p-1 rounded-2xl`}
               >
                  {item.Status}
               </button>
            </span>
         ))}
      </div>
   );
};

export default ItemsGrid;
