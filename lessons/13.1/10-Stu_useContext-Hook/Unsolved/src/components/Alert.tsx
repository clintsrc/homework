// TODO: Integrate the `WeatherContext` component into the `Alert` component below.
// Each `Alert` component should display each of the `WeatherContext` fields.
import { useContext } from "react";
import WeatherContext from "./WeatherContext";

interface AlertProps {
  alertType: string;
  message: string;
  adminMessage: string;
}

function Alert(props: AlertProps) {
  const weather = useContext(WeatherContext);

  return (
    <div className={`alert alert-${props.alertType || "success"}`} role="alert">
      <p>{weather.city}</p>
      <p>{weather.temperature}{weather.temperatureUnits == "F" ? weather.temperatureUnits : "C"}</p>
      <p>{weather.conditions}</p>
      <p>{props.message}: {props.adminMessage}</p>
    </div>
  );
}

export default Alert;
