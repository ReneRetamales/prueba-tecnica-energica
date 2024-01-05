import { Metadata } from "next";
import { AutosResponse } from "@/autos";

interface Props {
  params: {
    model: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, model } = await getAuto(params.model);

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
    <div className="flex flex-1 flex-col justify-center items-center mx-auto md:mx-20 lg:mx-40 xl:mx-80 pt-28 m-4">
      <div className="flex flex-col rounded-lg border-2 m-4 sm:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/3 3xl:w-1/3">
        <img
          src={auto.image}
          alt={`${auto.brand} - ${auto.model}`}
          className="rounded-t-lg w-auto pl-4 pr-4"
        />
        <div className="flex flex-1 flex-col p-5 space-y-2 border-t-2 bg-slate-50 rounded-b-lg">
          <h2 className="text-xl">{auto.brand}</h2>
          <span>Modelo: {auto.model}</span>
        </div>
      </div>
    </div>
  );
}
