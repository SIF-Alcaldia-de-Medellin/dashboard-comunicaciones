import Card from "./Card";
import { faBuildingCircleCheck, faBuildingCircleExclamation, faBuildingCircleXmark, faPenRuler, faPersonDigging } from "@fortawesome/free-solid-svg-icons";

const Paneles = ({data}) => {
  const dataByEstado = data.reduce((acc, obra) => {
    const estado = obra.properties["Estado del Proyecto"];
    acc[estado] = (acc[estado] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex justify-center gap-[10px] xl:gap-[20px] flex-wrap xl:flex-nowrap xl:justify-between">
      <Card className="bg-dark-blue-400 w-[100%] xl:w-1/5" icon={faPersonDigging} title="Total Obras" kpi={data.length || 0} />
      <Card className="bg-orange-500 w-[calc(1/2*100%-10px)] xl:w-1/5" icon={faBuildingCircleExclamation} title="En Ejecución" kpi={dataByEstado["En Ejecucion"] || 0} />
      <Card className="bg-blue-sky-500 w-1/2 xl:w-1/5" icon={faPenRuler} title="Proyectadas" kpi={dataByEstado["Proyectado"] || 0}/>
      <Card className="bg-red-500 w-[calc(1/2*100%-10px)] xl:w-1/5" icon={faBuildingCircleXmark} title="Suspendido" kpi={dataByEstado["Suspendido"] || 0} />
      <Card className="bg-green-500 w-1/2 xl:w-1/5" icon={faBuildingCircleCheck} title="Finalizadas" kpi={dataByEstado["Ejecutado"] || 0} />
    </div>
  );
};

export default Paneles;
