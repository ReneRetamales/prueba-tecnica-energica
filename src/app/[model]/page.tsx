import { Metadata } from "next";
import { AutosResponse } from "@/autos";
import Link from "next/link";
import { FcPrevious } from "react-icons/fc";

interface Props {
  params: {
    model: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, model } = await getAuto(decodeURIComponent(params.model as string));


  return {
    title: `AutoShop | ${model} - ${brand}`,
    description: `Página del auto ${brand} ${model}`,
  };
}

const getAuto = async (model: string): Promise<AutosResponse> => {
  const auto = await fetch(
    "https://auto-cl-default-rtdb.firebaseio.com/V1/vehicles/new/search/data.json",
    {
      cache: "force-cache",
    }
  ).then((resp) => resp.json());

  const filteredAutos = auto.filter(
    (auto: { model: string }) => auto.model === model
  );

  return filteredAutos[0];
};

export default async function AutoPage({ params }: Props) {
  const auto = await getAuto(params.model);

  return (
    <div className="flex flex-1 flex-col items-center mx-auto md:mx-20 lg:mx-40 pt-28">
      <Link href={`/`} className="flex flex-1 rounded-full border-2 font-semibold hover:duration-200 hover:bg-slate-100">
        <div className="flex items-center p-4">
          <FcPrevious />
          <span className="ml-1">Volver</span>
        </div>
      </Link>
      <div className="flex flex-col rounded-lg border-2 sm:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/3 3xl:w-1/3 m-4">
        <img
          src={auto.image}
          alt={`${auto.brand} - ${auto.model}`}
          className="rounded-t-lg w-auto"
        />
        <div className="flex flex-1 flex-col p-5 space-y-2 border-t-2 bg-slate-50 rounded-b-lg">
          <div className="mt-2 mb-2">
            <h2 className="text-2xl">
              {auto.brand} |{" "}
              <span className="text-base font-bold">{auto.model}</span>
            </h2>
            <span>Precio: $ ---</span>
          </div>
          <span>
            Estás visualizando tu próximo auto, el{" "}
            <span className="font-bold">{auto.model}</span> de{" "}
            <span className="font-bold">{auto.brand}</span>.
            <br />
            Si quieres saber más información de este auto, haz clic aquí abajo.
          </span>
          <div className="flex flex-1 bg-sky-400 justify-center rounded-full cursor-pointer hover:duration-200 hover:bg-sky-500">
            <span className="p-2 text-white font-medium uppercase">
              Más Información
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
