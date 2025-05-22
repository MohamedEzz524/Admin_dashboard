import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";
import { useMediaQuery } from "@mui/material";

const GeographyChart = ({ isDashboard = false }) => {
  const inMobile = useMediaQuery("(max-width:640px)");

  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard | inMobile ? 40 : 150}
      projectionTranslation={isDashboard | inMobile ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
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
              fontSize: 12,
            },
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
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: "var(--color-menu)",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};
export default GeographyChart;
