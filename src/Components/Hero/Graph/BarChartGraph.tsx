import {
   Bar,
   BarChart,
   CartesianGrid,
   Legend,
   Rectangle,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from "recharts";
import { CardData } from "../CardsData";

export const BarChartGraph: React.FC<CardData> = (props) => {
   return (
      <ResponsiveContainer
         width="100%"
         height="100%"
         maxHeight={500}
         className={"mt-10"}
      >
         <BarChart
            width={500}
            height={300}
            data={props.GraphsData}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <defs>
               <linearGradient
                  id="barGradient1"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
               >
                  <stop
                     offset="0%"
                     stopColor="#817AF3"
                     stopOpacity={1}
                  />
                  <stop
                     offset="50%"
                     stopColor="#74B0FA"
                     stopOpacity={1}
                  />
                  <stop
                     offset="100%"
                     stopColor="#79D0F1"
                     stopOpacity={1}
                  />
               </linearGradient>

               <linearGradient
                  id="barGradient1Reverse"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
               >
                  <stop
                     offset="0%"
                     stopColor="#79D0F1"
                     stopOpacity={1}
                  />
                  <stop
                     offset="50%"
                     stopColor="#74B0FA"
                     stopOpacity={1}
                  />
                  <stop
                     offset="100%"
                     stopColor="#817AF3"
                     stopOpacity={1}
                  />
               </linearGradient>

               <linearGradient
                  id="barGradient2"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
               >
                  <stop
                     offset="0%"
                     stopColor="#46A46C"
                     stopOpacity={1}
                  />
                  <stop
                     offset="50%"
                     stopColor="#51CC5D"
                     stopOpacity={1}
                  />
                  <stop
                     offset="100%"
                     stopColor="#57DA65"
                     stopOpacity={1}
                  />
               </linearGradient>

               <linearGradient
                  id="barGradient2Reverse"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
               >
                  <stop
                     offset="0%"
                     stopColor="#57DA65"
                     stopOpacity={1}
                  />
                  <stop
                     offset="50%"
                     stopColor="#51CC5D"
                     stopOpacity={1}
                  />
                  <stop
                     offset="100%"
                     stopColor="#46A46C"
                     stopOpacity={1}
                  />
               </linearGradient>
            </defs>

            <CartesianGrid
               vertical={false}
               strokeDasharray="0 0"
               stroke="#CCC"
            />

            <XAxis dataKey="xAxisName" />

            <YAxis tickCount={6} />

            <Tooltip />

            <Legend content={<RenderLegend />} />

            <Bar
               dataKey="yAxisVal1"
               name="Purchase"
               fill="url(#barGradient1)"
               activeBar={
                  <Rectangle
                     fill="url(#barGradient1Reverse)"
                     stroke="white"
                  />
               }
            />

            <Bar
               dataKey="yAxisVal2"
               name="Sales"
               fill="url(#barGradient2)"
               activeBar={
                  <Rectangle
                     fill="url(#barGradient2Reverse)"
                     stroke="white"
                  />
               }
            />
         </BarChart>
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

type Gradient = {
   id: string;
   colors: string[];
};

const gradients: Gradient[] = [
   {
      id: "gradient1",
      colors: ["#817AF3", "#74B0FA", "#79D0F1"],
   },
   {
      id: "gradient2",
      colors: ["#46A46C", "#51CC5D", "#57DA65"],
   },
];

const RenderLegend: React.FC<RenderLegendProps> = ({ payload }) => {
   return (
      <ul
         className="w-full mt-4 ml-12 flex gap-5"
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
                     background: `linear-gradient(to top, ${gradients[index].colors[0]}, ${gradients[index].colors[1]}, ${gradients[index].colors[2]})`,
                     marginRight: 8,
                  }}
               />
               <span className="text-gray-500 text-base">{entry.value}</span>
            </li>
         ))}
      </ul>
   );
};
