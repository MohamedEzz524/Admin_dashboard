import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Line = () => {
  return (
    <div className="m-5">
      <div className="flex flex-col gap-10">
        <Header title="Line Chart" subtitle="Data Analysis By Line Chart" />
        <div className="sm:h-[75vh] h-[69vh]">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Line;
