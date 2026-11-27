import { useState, useEffect } from "react";
import { BtnUpdate } from "./components/BtnUpdate";
import { Header } from "./components/Header";
import { Moisture } from "./components/Moisture";
import { Temperature } from "./components/Temperature";
import type { TelemetryReading } from "./types/telemetry";
import type { ApiReading } from "./types/api";
import { CurrentDate } from "./components/CurrentDate";

const CLIMATE_API_URL = "http://192.168.1.13/api/climate";

function App() {
  const [reading, setReading] = useState<TelemetryReading | null>(null);
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number | null>(null);
  const [deviceIp] = useState<string>("192.168.1.13");
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const load = () => {
    fetch(CLIMATE_API_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<ApiReading>;
      })
      .then((data: ApiReading) => {
        const telemetry: TelemetryReading = {
          temperature: data.temperature,
          humidity: data.humidity,
        };

        setReading(telemetry);
        setLastUpdatedAt(Date.now());
        setIsConnected(true);
      })
      .catch((err) => {
        console.error("Error fetching climate data:", err);
        setIsConnected(false);
      });
  };

  useEffect(() => {
    load();
    const id = setInterval(load, 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-dvh bg-screen-bg text-text-primary p-2 flex flex-col">
      <main className="flex-1 max-w-135 w-full mx-auto p-3 flex flex-col border-2 border-bs-gray-200 rounded-lg">
        <Header
          isConnected={isConnected}
          deviceIp={deviceIp}
          lastUpdatedAt={lastUpdatedAt}
        />
        <section
          className="flex items-center justify-between gap-4 mb-5"
          aria-label="Дії з пристроєм"
        >
          <BtnUpdate updateData={load} />
          <CurrentDate />
        </section>
        <Temperature temperature={reading?.temperature ?? null} />
        <Moisture moisture={reading?.humidity ?? null} />
      </main>
    </div>
  );
}

export default App;
