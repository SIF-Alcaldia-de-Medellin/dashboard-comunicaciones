import { createContext } from "react";

const FilterContext = createContext({
    comuna: undefined,
    barrio: undefined,
    categoria: undefined,
    grupo: undefined
});

export default FilterContext