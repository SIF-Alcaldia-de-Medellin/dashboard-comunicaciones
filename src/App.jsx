import { useState, useEffect, lazy, Suspense } from "react";
import obrasData from "./data/obras.json";
import Header from "./components/Header";
import ModalContext from "./context/ModalContext";
import FilterContext from "./context/FilterContext";
import SkeletonMap from "./components/SkeletonMap";
import SkeletonPaneles from "./components/SkeletonPaneles";
import SkeletonSummary from "./components/SkeletonSummary";
import SkeletonFilterButton from "./components/SkeletonFilterButton";

const MapaObras = lazy(() => import("./components/MapaObras"));
const Paneles = lazy(() => import("./components/Paneles"));
const Summary = lazy(() => import("./components/Summary"));
const FilterButton = lazy(() => import("./components/FilterButton"));
const PieChartObras = lazy(() => import("./components/PieChartObras"));
const HistogramaComuna = lazy(() => import("./components/HistogramaComuna"));

const App = () => {
  const [filters, setFilters] = useState({
    comuna: undefined,
    barrio: undefined,
    categoria: undefined
  });

  const setFilter = (filter, value) => {
    setFilters({...filters, [filter]: value})
  }

  useEffect(() => {
    console.log("Filters actualizados:", filters);
  }, [filters]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  const [todasLasObras, _] = useState(obrasData.features || []);
  const [obrasFiltradas, setObrasFiltradas] = useState(todasLasObras);

  useEffect(() => {
    const resultadoFiltrado = todasLasObras.filter((obra) => {
      const { Comuna, Categoria, ["Nombre Barrio"]: Barrio, ["Grupo del Proyecto"]: Grupo } = obra.properties || {};

      if (filters.comuna && Comuna !== filters.comuna) return false;
      if (filters.barrio && Barrio !== filters.barrio) return false;
      if (filters.categoria && Categoria !== filters.categoria) return false;
      if (filters.grupo && Grupo !== filters.grupo) return false;

      return true;
    });
  
    setObrasFiltradas(resultadoFiltrado);
  }, [
    filters,
    todasLasObras 
  ]);


  return (
    <ModalContext.Provider value={{isModalOpen: isModalOpen, openModal: openModal}}>
      <FilterContext.Provider value={{filters, setFilter, setFilters}}>
        <div className="bg min-w-screen min-h-screen" onClick={closeModal}>
          <main className="relative flex flex-col p-[20px] gap-[10px] xl:gap-[20px]">
            <Header title="Dashboard de Obras" />
            <div className="flex flex-col bg-white rounded-2xl p-[20px] gap-[10px] lg:gap-[20px]">
              <Suspense fallback={<SkeletonPaneles />}>
                <Paneles data={obrasFiltradas} />
              </Suspense>
            </div>
            <div className="bg-white p-[20px] flex flex-wrap rounded-2xl gap-[10px] lg:flex-nowrap lg:gap-[20px]">
              <Suspense fallback={<SkeletonMap className="w-full lg:min-w-[calc(3/5*100%+40px)]"/>}>
                <MapaObras data={obrasFiltradas} className="w-full lg:w-[calc(3/5*100%+40px)]"/>
              </Suspense>
              <Suspense fallback={<SkeletonSummary className="w-full lg:w-[calc(2/5*100%+20px)]"/>}>
                <Summary data={obrasFiltradas} className="w-full lg:w-[calc(2/5*100%+20px)]"/>
              </Suspense>
            </div>
            
            <div className="flex flex-col gap-[20px] lg:flex-row">
              <Suspense fallback={<div className="w-full lg:w-1/2 rounded-2xl bg-white animate-pulse h-[353.5px]"></div>}>
                <div className="w-full lg:w-1/2 p-2 px-4 rounded-2xl bg-white">
                  <h3 className="font-bold heading-5 text-center">Histograma por comuna</h3>
                  <HistogramaComuna data={obrasFiltradas} />
                </div>
              </Suspense>
              <Suspense fallback={<div className="w-full lg:w-1/2 rounded-2xl bg-white animate-pulse h-[353.5px]"></div>}>
                <div className="w-full lg:w-1/2 p-2 px-4 rounded-2xl bg-white">
                  <h3 className="font-bold heading-5 text-center">Distribución por categoria de proyecto</h3>
                  <PieChartObras data={obrasFiltradas}/>
                </div>
              </Suspense>
            </div>
            <Suspense fallback={<SkeletonFilterButton />}>
              <FilterButton />
            </Suspense>
          </main>
        </div>
      </FilterContext.Provider>
    </ModalContext.Provider>
    );
};

export default App;
