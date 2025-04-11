import Card from "./Card";

const SkeletonPaneles = () => {
    return (
        <div className="flex min-h-[166.5px] justify-between gap-[20px] relative overflow-hidden">
            <Card className="bg-dark-blue-400 animate-pulse w-1/5" title="" kpi="" />
            <Card className="bg-orange-500 animate-pulse w-1/5" title="" kpi="" />
            <Card className="bg-sky-500 animate-pulse w-1/5" title="" kpi="" />
            <Card className="bg-red-500 animate-pulse w-1/5" title="" kpi="" />
            <Card className="bg-green-500 animate-pulse w-1/5" title="" kpi="" />
        </div>
    );
  };
  
  export default SkeletonPaneles;
  