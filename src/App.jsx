import React, { useState } from "react";
import MapaObras from "./components/MapaObras";
import RadarObras from "./components/RadarObras";
import HistogramaEstados from "./components/HistogramaEstados";
import TreeMapObras from "./components/TreeMapObras";
import obrasData from "./data/obras.json";
import Header from "./components/Header";
import Paneles from "./components/Paneles";
import FiltroBarrio from "./components/FiltroBarrio";
import Summary from "./components/Summary";
import "./styles.css";

const App = () => {
  // 🎯 Estado local para almacenar la comuna seleccionada
  const [comunaSeleccionada, setComunaSeleccionada] = useState("");

  // 👉 Filtrar obras según la comuna seleccionada
  const obrasFiltradas = comunaSeleccionada
    ? obrasData.features.filter(
        (obra) => obra.properties.comuna === comunaSeleccionada
      )
    : obrasData.features;

  // 📊 Datos para el gráfico de radar: agrupados por categoría
  const categoriasUnicas = [
    ...new Set(obrasFiltradas.map((obra) => obra.properties.categoria)),
  ];
  const radarData = categoriasUnicas.map((categoria) => ({
    categoria,
    cantidad: obrasFiltradas.filter(
      (obra) => obra.properties.categoria === categoria
    ).length,
  }));

  // 📈 Datos para el histograma: agrupados por estado
  const estadosUnicos = [
    ...new Set(obrasFiltradas.map((obra) => obra.properties.estado)),
  ];
  const histogramaData = estadosUnicos.map((estado) => ({
    estado,
    cantidad: obrasFiltradas.filter(
      (obra) => obra.properties.estado === estado
    ).length,
  }));

  // 🧮 Cálculo de totales para los paneles de resumen
  const total = obrasFiltradas.length;
  const ejecucion = obrasFiltradas.filter(
    (obra) => obra.properties.estado === "En Ejecucion"
  ).length;
  const proyectado = obrasFiltradas.filter(
    (obra) => obra.properties.estado === "Proyectado"
  ).length;
  const finalizadas = obrasFiltradas.filter(
    (obra) => obra.properties.estado === "Finalizada"
  ).length;

  // 🧾 Datos para el componente Summary
  const resumen = {
    total,
    estados: estadosUnicos.map((estado) => ({
      estado,
      cantidad: obrasFiltradas.filter(
        (obra) => obra.properties.estado === estado
      ).length,
    })),
    categorias: categoriasUnicas.map((categoria) => ({
      categoria,
      cantidad: obrasFiltradas.filter(
        (obra) => obra.properties.categoria === categoria
      ).length,
    })),
  };

  return (
    <div className="dashboard-container">
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>
      {/* 🧢 Encabezado principal */}
      <div className="header-container">
        <Header />
      </div>

      {/* 📋 Paneles de resumen */}
      <div className="paneles-container">
        <Paneles
          total={total}
          ejecucion={ejecucion}
          proyectado={proyectado}
          finalizadas={finalizadas}
        />
      </div>

      {/* 🎛️ Filtro de comuna */}
      <div className="filtro-container">
        <FiltroBarrio onSelectComuna={setComunaSeleccionada} />
      </div>

      {/* 🗺️ Mapa de obras */}
      <div className="map-container">
        <MapaObras comunaSeleccionada={comunaSeleccionada} />
      </div>

      {/* 🧾 Resumen detallado */}
      <div className="summary-container">
        <Summary data={resumen} />
      </div>

      {/* 📊 Gráficos individuales */}
      <div className="chart-container">
        {/* Gráfico de radar */}
        <div className="chart-item">
          <h3>Obras por Categoría</h3>
          <RadarObras data={radarData} />
        </div>

        {/* Histograma de estados */}
        <div className="chart-item">
          <h3>Obras por Estado</h3>
          <HistogramaEstados data={histogramaData} />
        </div>

        {/* TreeMap de categorías */}
        <div className="chart-item">
          <h3>Obras por Categoría (Visualización TreeMap)</h3>
          <TreeMapObras data={radarData} />
        </div>
      </div>
    </div>
  );
};

export default App;
