import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../data/mockData";
import { useMediaQuery } from "@mui/material";

const BarChart = ({ isDashboard = false }) => {
  const inMobile = useMediaQuery("(max-width:640px)");

  return (
    <ResponsiveBar
      data={data}
      keys={["USA", "Germany", "Turkey", "Italy"]}
      indexBy="country"
      margin={
        isDashboard | inMobile
          ? { top: 20, right: 40, bottom: 50, left: 40 }
          : { top: 50, right: 140, bottom: 50, left: 60 }
      }
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      layout={inMobile ? "horizontal" : "vertical"}
      theme={{
        axis: {
          legend: {
            text: {
              fill: "var(--color-menu)",
              fontSize: 10,
              fontWeight: 400,
            },
          },
          ticks: {
            text: {
              fill: "var(--text)",
              fontSize: 10,
            },
          },
        },
        legends: {
          text: {
            fill: "var(--color-menu)",
            fontSize: 12,
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
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard | inMobile ? undefined : "Country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard | inMobile ? undefined : "Exports",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={!isDashboard}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={
        !inMobile && !isDashboard
          ? [
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
      role="application"
      barAriaLabel={(e) =>
        `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
      }
    />
  );
};

export default BarChart;
