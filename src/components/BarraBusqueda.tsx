"use client";

import { useState, ChangeEvent } from "react";
import { FcSearch } from "react-icons/fc";

interface BarraBusquedaProps {
  onBusquedaChange: (term: string) => void;
}

export const BarraBusqueda: React.FC<BarraBusquedaProps> = ({
  onBusquedaChange,
}) => {
  const [term, setTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
    onBusquedaChange(event.target.value);
  };

  return (
    <div className="m-4">
      <div className="flex rounded-lg border-2">
        <input
          type="text"
          placeholder="Buscar autos por marca y modelo..."
          className="w-full rounded-lg p-2 focus:outline-none"
          value={term}
          onChange={handleInputChange}
        />
        <div className="flex justify-center items-center text-2xl p-2">
          <FcSearch />
        </div>
      </div>
    </div>
  );
};
