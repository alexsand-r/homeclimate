import { useState } from "react";

import { BtnReconnect } from "./components/BtnReconnect";
import { BtnUpdate } from "./components/BtnUpdate";
import { Header } from "./components/Header";
import { Moisture } from "./components/Moisture";
import { Temperature } from "./components/Temperature";
import { MOCK_READINGS } from "./mocks/data";

function App() {
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number>(() => Date.now());
  const [deviceIp, setDeviceIp] = useState<string>("192.168.1.120");
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [readingIndex, setReadingIndex] = useState<number>(0);
  const currentReading = MOCK_READINGS[readingIndex];

  const handleUpdate = () => {
    setReadingIndex((prevIndex) => {
      if (prevIndex >= MOCK_READINGS.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
    setLastUpdatedAt(Date.now());
  };
  const handleConnect = () => {
    setIsConnected((prev) => !prev);
  };

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
          <BtnUpdate handleUpdate={handleUpdate} />
          <BtnReconnect handleConnect={handleConnect} />
        </section>
        <Temperature temperature={currentReading.temperature} />
        <Moisture moisture={currentReading.humidity} />
      </main>
    </div>
  );
}

export default App;
