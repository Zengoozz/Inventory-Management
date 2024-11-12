import IconFactory from "../IconFactory";
import { getPathData } from "../iconsSvgPath";
import Sales from "../../assets/Icons/Sales.svg?raw";

export type Icon = {
   Name: string;
   Icon: JSX.Element;
   Quantity?: number;
   IsCash?: boolean;
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
            Icon: (
               <IconFactory
                  name={"sales"}
                  path={getPathData(Sales)}
                  fill={true}
                  stroke={false}
                  width={40}
                  height={40}
               />
            ),
            Quantity: 832,
            IsCash: true
         },
         {
            Name: "revenue",
            Icon: (
               <IconFactory
                  name={"sales"}
                  path={getPathData(Sales)}
                  fill={true}
                  stroke={false}
               />
            ),
            Quantity: 18300,
            IsCash: true
         },
         {
            Name: "profit",
            Icon: (
               <IconFactory
                  name={"sales"}
                  path={getPathData(Sales)}
                  fill={true}
                  stroke={false}
               />
            ),
            Quantity: 868,
            IsCash: true
         },
         {
            Name: "cost",
            Icon: (
               <IconFactory
                  name={"sales"}
                  path={getPathData(Sales)}
                  fill={true}
                  stroke={false}
               />
            ),
            Quantity: 17432,
            IsCash: true
         }
      ],
   },
   
];
