import Sales from "../../assets/Icons/Sales.svg";
import Revenue from "../../assets/Icons/Revenue.svg";
import Profit from "../../assets/Icons/Profit.svg";
import Cost from "../../assets/Icons/Cost.svg";
import Purchase from "../../assets/Icons/Purchase.svg";
import Cancel from "../../assets/Icons/Cancel.svg";
import Quantity from "../../assets/Icons/Quantity.svg";
import OnTheWay from "../../assets/Icons/OnTheWay.svg";
import SuppliersSummary from "../../assets/Icons/SuppliersSummary.svg";
import Categories from "../../assets/Icons/Categories.svg";

export type Icon = {
   Name: string;
   Icon: string;
   Quantity: number;
   IsCash: boolean;
};

export type CardData = {
   Index: number;
   Title: string;
   Type: string; // O >> Overview , S >> Summary, G >> Graph
   Icons: Icon[];
};

export const CardsListData: CardData[] = [
   {
      Index: 0,
      Title: "sales overview",
      Type: "O",
      Icons: [
         {
            Name: "sales",
            Icon: Sales,
            Quantity: 832,
            IsCash: true,
         },
         {
            Name: "revenue",
            Icon: Revenue,
            Quantity: 18300,
            IsCash: true,
         },
         {
            Name: "profit",
            Icon: Profit,
            Quantity: 868,
            IsCash: true,
         },
         {
            Name: "cost",
            Icon: Cost,
            Quantity: 17432,
            IsCash: true,
         },
      ],
   },
   {
      Index: 1,
      Title: "inventory summary",
      Type: "S",
      Icons: [
         {
            Name: "quantity in hand",
            Icon: Quantity,
            Quantity: 868,
            IsCash: false,
         },
         {
            Name: "To be received",
            Icon: OnTheWay,
            Quantity: 200,
            IsCash: false,
         },
      ],
   },
   {
      Index: 2,
      Title: "purchase overview",
      Type: "O",
      Icons: [
         {
            Name: "purchase",
            Icon: Purchase,
            Quantity: 82,
            IsCash: false,
         },
         {
            Name: "cost",
            Icon: Cost,
            Quantity: 13573,
            IsCash: true,
         },
         {
            Name: "cancel",
            Icon: Cancel,
            Quantity: 5,
            IsCash: false,
         },
         {
            Name: "return",
            Icon: Profit,
            Quantity: 17432,
            IsCash: true,
         },
      ],
   },
   {
      Index: 3,
      Title: "product summary",
      Type: "S",
      Icons: [
         {
            Name: "number of suppliers",
            Icon: SuppliersSummary,
            Quantity: 31,
            IsCash: false,
         },
         {
            Name: "number of categories",
            Icon: Categories,
            Quantity: 21,
            IsCash: false,
         },
      ],
   },
];
