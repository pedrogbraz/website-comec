import MapContainer from "./map";

export default function Mapa() {
  return (
    <>
      <main className="w-[100vw] mt-32 px-10 pt-3 md:px-20 space-y-6">
        <div className="flex flex-col items-center px-32">
          <div className="flex w-[100vw] flex-col items-center">
            <h1 className="text-[1.563rem] font-bold uppercase text-[--white] mb-6">
              Localização do Evento
            </h1>
          </div>
          <div className="bg-[--white] p-12 rounded-2xl w-[100%] h-[100vh]">
            <MapContainer />
          </div>
        </div>
      </main>
    </>
  );
}
