import { Box } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(var(--sidebar) 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, var(--blue-accent) ${angle}deg 360deg),
            var(--primary-accent)`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
