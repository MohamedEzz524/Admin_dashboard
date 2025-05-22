import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";
import { useMediaQuery } from "@mui/material";

const LineChart = ({ isDashboard = false }) => {
  const inMobile = useMediaQuery("(max-width:640px)");

  return (
    <ResponsiveLine
      data={data}
      margin={
        inMobile | isDashboard
          ? { top: 10, right: 80, bottom: 50, left: 50 }
          : { top: 50, right: 110, bottom: 50, left: 60 }
      }
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      curve="catmullRom"
      axisBottom={{
        legend: isDashboard ? null : "transportation",
        tickPadding: 5,
        tickSize: 5,
        tickRotation: 0,
        legendOffset: 36,
      }}
      axisLeft={{
        legend: isDashboard ? null : "count",
        tickValues: isDashboard ? 5 : 10,
        legendOffset: -40,
        tickPadding: 5,
        tickSize: 5,
        tickRotation: 0,
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      // enablePoints={!isDashboard}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "var(--color-menu)",
            },
          },
          legend: {
            text: {
              fill: "var(--color-menu)",
            },
          },
          ticks: {
            line: {
              stroke: "var(--color-menu)",
              strokeWidth: 1,
            },
            text: {
              fill: "var(--text)",
              fontSize: isDashboard ? 8 : 10,
            },
          },
        },
        legends: {
          text: {
            fill: "var(--color-menu)",
            fontSize: 10,
          },
        },

        tooltip: {
          container: {
            background: "var(--sidebar)",
            color: "var(--color-menu)",
            fontSize: 14,
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            padding: "8px 12px",
          },
        },
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 22,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default LineChart;
