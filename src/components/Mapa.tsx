import MapContainer from "./map";

export default function Mapa() {
  return (
    <>
      <main className="w-[100vw] mt-32 px-10 pt-3 md:px-20 space-y-6">
        <div className="flex flex-col items-center px-32 border-[--orange-theme] border rounded-2xl p-8">
          <div className="flex w-[100vw] flex-col items-center">
          <h1 className="absolute -mt-[55px] bg-[--orange-theme] text-[1.563rem] font-medium uppercase text-black py-1 px-3 rounded-lg">
              LOCALIZAÇÃO DO EVENTO
            </h1>
          </div>
          <div className="p-12 rounded-2xl w-[100%] h-[100vh]">
            <MapContainer />
          </div>
        </div>
      </main>
    </>
  );
}
