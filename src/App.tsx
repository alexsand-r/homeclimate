// import { useState } from "react";

import { BtnReconnect } from "./components/BtnReconnect";
import { BtnUpdate } from "./components/BtnUpdate";
import { Header } from "./components/Header";
import { Moisture } from "./components/Moisture";
import { Temperature } from "./components/Temperature";

function App() {
  return (
    <div className="min-h-dvh bg-screen-bg text-text-primary p-2 flex flex-col">
      <main className="flex-1 w-full p-3 flex flex-col border-2 border-bs-gray-200 rounded-lg">
        <Header />
        <section
          className="flex items-center justify-between gap-4 mb-5"
          aria-label="Дії з пристроєм"
        >
          <BtnUpdate />
          <BtnReconnect />
        </section>
        <Temperature />
        <Moisture />
      </main>
    </div>
  );
}

export default App;
