import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <div className="m-5">
      <div className="flex flex-col gap-10">
        <Header title="Pie Chart" subtitle="Data Analysis By Pie Chart" />
        <div className="sm:h-[75vh] h-[69vh]">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Bar;
