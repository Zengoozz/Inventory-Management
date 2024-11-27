import { Icon } from "../../../assets/Data/CardsData";

type props = {
   order: number;
   length: number;
   icon: Icon;
   type: string;
};

const InfoItem = (props: props) => {
   const compPadding =
      props.order == 0
         ? "pr-[1.375rem]"
         : props.order != props.length
         ? "px-[1.375rem]"
         : "pl-[1.375rem]";

   const formatCash = (qty: number): string => {
      const strigfiedQty = qty.toString();
      if (strigfiedQty.length > 4) {
         const arr = strigfiedQty.split("");
         arr.splice(-3, 0, ",");
         return arr.join("");
      }
      return strigfiedQty;
   };

   const quantity =
      props.icon.IsCash && props.icon.Quantity != undefined && props.icon.Quantity.toString().length > 4
         ? formatCash(props.icon.Quantity)
         : props.icon.Quantity;

   let infoStyle = "";
   let textColor = "";
   
   if (props.type == "O") {
      infoStyle = "mt-3 flex justify-center items-center gap-8";
      textColor = "text-gray-500";
   } else {
      infoStyle = "mt-2 flex flex-col items-center";
      textColor = "text-[#444444]";
   }

   return (
      <div className={`flex flex-col items-center grow ${compPadding}`}>
         <div dangerouslySetInnerHTML={{ __html: props.icon.Icon }} />
         <span className={`w-full ${infoStyle}`}>
            <p className="text-customBase text-gray-600 font-semibold">
               {props.icon.IsCash && "₹"} {quantity}
            </p>
            <p className={`capitalize text-sm font-medium ${textColor}`}>
               {props.icon.Name}
            </p>
         </span>
      </div>
   );
};

export default InfoItem;
