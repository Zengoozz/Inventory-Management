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
   Quantity?: number;
   IsCash?: boolean;
};

export type GraphData = {
   xAxisName: string;
   yAxisVal1: number;
   yAxisVal2: number;
}

export type CardData = {
   Index: number;
   Title: string;
   Type: string;// O >> Overview , S >> Summary, G >> Graph
   Icons?: Icon[];
   GraphsData?: GraphData[];
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
   {
      Index: 4,
      Title: "sales & purchase",
      Type: "GB",
      GraphsData: [
         {
            xAxisName: "Jan",
            yAxisVal1: 55000,
            yAxisVal2: 50000,
         },
         {
            xAxisName: "Feb",
            yAxisVal1: 59000,
            yAxisVal2: 48000,
         },
         {
            xAxisName: "Mar",
            yAxisVal1: 45000,
            yAxisVal2: 52000,
         },
         {
            xAxisName: "Apr",
            yAxisVal1: 37000,
            yAxisVal2: 43000,
         },
         {
            xAxisName: "May",
            yAxisVal1: 44000,
            yAxisVal2: 47000,
         },
         {
            xAxisName: "Jun",
            yAxisVal1: 29000,
            yAxisVal2: 41000,
         },
         {
            xAxisName: "Jul",
            yAxisVal1: 55000,
            yAxisVal2: 50000,
         },
         {
            xAxisName: "Aug",
            yAxisVal1: 45000,
            yAxisVal2: 42000,
         },
         {
            xAxisName: "Sep",
            yAxisVal1: 44000,
            yAxisVal2: 43000,
         },
         {
            xAxisName: "Oct",
            yAxisVal1: 37000,
            yAxisVal2: 43000,
         }
      ],
   },
   {
      Index: 5,
      Title: "order summary",
      Type: "GC",
      GraphsData: [
         {
            xAxisName: "Jan",
            yAxisVal1: 3700,
            yAxisVal2: 3100,
         },
         {
            xAxisName: "Jan-1",
            yAxisVal1: 1800,
            yAxisVal2: 2200,
         },
         {
            xAxisName: "Feb",
            yAxisVal1: 2800,
            yAxisVal2: 3700,
         },
         {
            xAxisName: "Feb-1",
            yAxisVal1: 2100,
            yAxisVal2: 3500,
         },
         {
            xAxisName: "Mar",
            yAxisVal1: 2500,
            yAxisVal2: 3300,
         },
         {
            xAxisName: "Mar-1",
            yAxisVal1: 2100,
            yAxisVal2: 2900,
         },
         {
            xAxisName: "Apr",
            yAxisVal1: 1500,
            yAxisVal2: 3300,
         },
         {
            xAxisName: "Apr-1",
            yAxisVal1: 2000,
            yAxisVal2: 2200,
         },
         {
            xAxisName: "May",
            yAxisVal1: 2200,
            yAxisVal2: 3200,
         }
      ],
   }
];
