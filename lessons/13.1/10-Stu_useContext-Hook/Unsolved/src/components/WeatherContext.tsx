// TODO: Use a useContext hook to create a WeatherContext component with the fields
// `city`, `temperature`, `temperatureUnits` and `conditions`.

import { createContext } from "react";

const WeatherContext = createContext<{
  city: string;
  temperature: number;
  temperatureUnits: string;
  conditions: string;
}>  ({
    city: "",
    temperature: 0,
    temperatureUnits: "F",
    conditions: "",
});

export default WeatherContext;
