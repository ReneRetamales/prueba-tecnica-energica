"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AutosResponse } from "@/autos";

interface AutosListaProps {
  busqueda: string;
}

export const AutosLista: React.FC<AutosListaProps> = ({ busqueda }) => {
  const [autos, setAutos] = useState<AutosResponse[]>([]);

  useEffect(() => {
    const fetchAutos = async () => {
      const response = await fetch(
        "https://auto-cl-default-rtdb.firebaseio.com/V1/vehicles/new/search/data.json"
      );
      const data = await response.json();
      setAutos(data);
    };

    fetchAutos();
  }, []);

  const autosMostrar = autos.filter(
    (auto) =>
      (auto.type !== "brand" || auto.image) &&
      (busqueda === "" ||
        auto.brand.toLowerCase().includes(busqueda.toLowerCase()) ||
        (auto.model &&
          auto.model.toLowerCase().includes(busqueda.toLowerCase())))
  );

  return (
    <div>
      <div className="flex justify-left m-4">
        <h1 className="text-xl font-bold">Listado de Autos | AutoShop</h1>
      </div>

      <div className="flex flex-wrap justify-center m-2">
        {autosMostrar.map((auto) => (
          <Link
            href={`/${auto.model}`}
            key={`${auto.brand}-${auto.model}`}
            className="flex sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-2 cursor-default"
          >
            <div className="flex flex-col">
              <div className="flex flex-col flex-1 border-2 rounded-lg">
                {auto.image && (
                  <img
                    src={auto.image}
                    alt={`${auto.brand} - ${auto.model}`}
                    className="rounded-t-lg"
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                )}

                <div className="flex flex-1 flex-col p-5 space-y-2 border-t-2 bg-slate-50 rounded-b-lg cursor-pointer hover:duration-200 hover:bg-slate-200">
                  <h2 className="text-xl">{auto.brand}</h2>
                  <span className="text-">{auto.model}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
