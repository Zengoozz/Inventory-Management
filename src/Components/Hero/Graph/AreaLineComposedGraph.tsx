import {
   Area,
   CartesianGrid,
   ComposedChart,
   Legend,
   Line,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from "recharts";
import { CardData } from "../CardsData";

//TODO: Check the Overview Items Margin Between Name & Qty

export const AreaLineComposedGraph: React.FC<CardData> = (props) => {
   return (
      <ResponsiveContainer
         width="100%"
         height="100%"
         maxHeight={300}
         className={"mt-10"}
      >
         <ComposedChart
            width={500}
            height={350}
            data={props.GraphsData}
            margin={{
               top: 5,
               right: 10,
               left: 0,
               bottom: 0,
            }}
         >
            <CartesianGrid
               vertical={false}
               strokeDasharray="0 0"
               stroke="#CCC"
            />

            <XAxis
               dataKey="xAxisName"
               ticks={["Jan", "Feb", "Mar", "Apr", "May"]}
            />

            <YAxis
               tickCount={5}
               ticks={[1000, 2000, 3000, 4000]}
            />

            <Tooltip />

            <Legend content={<RenderLegend />} />

            <Area
               type="natural"
               dataKey="yAxisVal1"
               name="Ordered"
               stroke="#DBA362"
               strokeWidth={3}
               fill="#DBA362"
               fillOpacity={0.2}
            />
            <Line
               type="natural"
               dataKey="yAxisVal2"
               name="Delivered"
               stroke="#B6D3FA"
               strokeWidth={3}
               dot={false}
            />
         </ComposedChart>
      </ResponsiveContainer>
   );
};

interface LegendPayload {
   value: string; // The label for the legend item
   color: string; // The color associated with the legend item
}

interface RenderLegendProps {
   payload?: LegendPayload[]; // The payload array passed by Recharts
}

const RenderLegend: React.FC<RenderLegendProps> = ({ payload }) => {
   return (
      <ul
         className="w-full mt-2 flex justify-center gap-5"
         style={{ listStyleType: "none", padding: 0 }}
      >
         {payload?.map((entry, index) => (
            <li
               key={`item-${index}`}
               className="duration-300 hover:cursor-pointer hover:font-semibold"
               style={{ display: "flex", alignItems: "center", marginBottom: 4 }}
            >
               <div
                  style={{
                     width: 15,
                     height: 15,
                     borderRadius: "50%",
                     background: entry.color,
                     marginRight: 8,
                  }}
               />
               <span className="text-gray-500 text-base">{entry.value}</span>
            </li>
         ))}
      </ul>
   );
};
