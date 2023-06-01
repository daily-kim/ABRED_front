import { Line } from "react-chartjs-2";
import { hexToRgb } from "./utils";
import { appColor } from "../../../../utils/style";

export const DoubleLineChart = ({
  labels,
  data1,
  data2,
}: {
  labels: string[];
  data1: number[];
  data2: (number | null)[];
}) => {
  const currentLable = 3;
  const dataMin = Math.min(
    Math.min(...(data1.filter((val) => val !== null) as number[])),
    Math.min(...(data2.filter((val) => val !== null) as number[]))
  );
  const dataMax = Math.max(
    Math.max(...(data1.filter((val) => val !== null) as number[])),
    Math.max(...(data2.filter((val) => val !== null) as number[]))
  );

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      annotation: {
        annotations: {
          line: {
            type: "line",
            xMin: currentLable,
            xMax: currentLable,
            yMin: Math.floor(dataMin / 1000 - 1) * 1000,
            yMax: Math.floor(dataMax / 1000 + 1) * 1000,
            borderColor: hexToRgb(appColor.purpleSoft),
            borderWidth: 2,
            borderDash: [2, 3],
          },
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        data: data1,
        borderColor: hexToRgb(appColor.purple),
      },
      {
        data: data2,
        borderColor: hexToRgb(appColor.purple),
      },
    ],
  };
  return <Line options={options} data={chartData} />;
};
