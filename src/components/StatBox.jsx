import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <div className="w-full h-full p-4">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <div>
            {icon}
            <h4 className="h4 font-bold text-menu">{title}</h4>
          </div>
          <div>
            <ProgressCircle progress={progress} />
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <h5 className="h5 text-accent">{subtitle}</h5>
          <h5 className="h5 italic text-admin">{increase}</h5>
        </div>
      </div>
    </div>
  );
};

export default StatBox;
