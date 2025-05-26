import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <div className="m-5">
      <div className="flex flex-col gap-10">
        <Header title="Geography" subtitle="Our World Wide Business" />
        <div className="sm:h-[70vh] h-[69vh] border border-menu rounded-sm ">
          <GeographyChart />
        </div>
      </div>
    </div>
  );
};

export default Geography;
