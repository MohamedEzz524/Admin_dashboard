import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../data/mockData";

const PieChart = ({ isDashboard = false }) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="var(--text)"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      enableArcLabels={!isDashboard}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolShape: "circle",
        },
      ]}
      theme={{
        legends: {
          text: {
            fill: "var(--color-menu)",
            fontSize: 13,
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
    />
  );
};

export default PieChart;
