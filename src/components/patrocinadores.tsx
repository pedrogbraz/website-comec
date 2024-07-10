import Container from "./container";

export default function Patrocinadores() {
  return (
    <>
      <main className="w-[100vw] px-10 pt-3 md:px-20 space-y-6">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center">
            <h1 className="text-[1.563rem] font-bold uppercase text-[--orange-theme]">
              Parceiros
            </h1>
            <p className="text-[2.1875rem] font-semibold text-center">
              Nossos Parceiros
            </p>
          </div>
          <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/1.png"
              titulo="Trio"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/3.png"
              titulo="Clínica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/1.png"
              titulo="Trio"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
                        <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/3.png"
              titulo="Clínica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/1.png"
              titulo="Trio"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
            <Container
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              link="/"
              img="/2.png"
              titulo="Hyperbárica"
            />
          </div>
        </div>
      </main>
    </>
  );
}
