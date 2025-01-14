// TODO: Integrate the WeatherContext component into the App component below.
import WeatherContext from "./components/WeatherContext";

import "./App.css";
import Alert from "./components/Alert";

const message = "Important Message";
const alertType = "danger";
const adminMessage = "System Maintenance Due Soon!";

const message2 = "Important Warning";
const alertType2 = "warning";
const adminMessage2 = "Database Backup Due Soon!";

// For the weather content
const city = "New York";
const temperature = 56;
const temperatureUnits = "C";
const conditions = "Sunny";

function App() {
  return (
    <WeatherContext.Provider
      value={{
        city: city,
        temperature: temperature,
        temperatureUnits: temperatureUnits,
        conditions: conditions,
      }}
    >
      <Alert
        alertType={alertType}
        message={message}
        adminMessage={adminMessage}
      />
      <Alert
        alertType={alertType2}
        message={message2}
        adminMessage={adminMessage2}
      />
    </WeatherContext.Provider>
  );
}

export default App;
