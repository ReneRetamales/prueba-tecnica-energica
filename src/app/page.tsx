"use client";

import { useState } from "react";
import { AutosLista } from "@/components";
import { BarraBusqueda } from "@/components";

export default function AutosPage() {
  const [busqueda, setBusqueda] = useState<string>("");

  const handleBusquedaChange = (term: string) => {
    setBusqueda(term);
  };

  return (
    <div className="flex flex-col justify-center mx-auto md:mx-20 lg:mx-40 xl:mx-80 pt-28">
      <BarraBusqueda onBusquedaChange={handleBusquedaChange} />
      <AutosLista busqueda={busqueda} />
    </div>
  );
}
