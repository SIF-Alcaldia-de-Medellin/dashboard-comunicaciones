import Card from "./Card";

const SkeletonPaneles = () => {
    return (
        <div className="min-h-[166.5px] relative overflow-hidden flex justify-center gap-[10px] xl:gap-[20px] flex-wrap xl:flex-nowrap xl:justify-between">
            <Card className="bg-dark-blue-400 w-[100%] xl:w-1/5 animate-pulse" title="" kpi="" />
            <Card className="bg-orange-500 w-[calc(1/2*100%-10px)] xl:w-1/5 animate-pulse" title="" kpi="" />
            <Card className="bg-blue-sky-500 w-1/2 xl:w-1/5 animate-pulse" title="" kpi="" />
            <Card className="bg-red-500 w-[calc(1/2*100%-10px)] xl:w-1/5 animate-pulse" title="" kpi="" />
            <Card className="bg-green-500 w-1/2 xl:w-1/5 animate-pulse" title="" kpi="" />
        </div>
    );
  };
  
  export default SkeletonPaneles;
  