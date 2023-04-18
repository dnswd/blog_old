import NavBar from "@/components/NavBar";



export default function Blog() {
  return (
    <div className="relative text-rose-50">
      <NavBar />
      <main className="h-screen">
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-dark-canvas">
          <header className="relative mx-auto mt-40 mb-16 sm:mt-4/16 xl:mt-2/16 w-screen-65">
            <div className="w-screen-50">
              <p className="text-5xl font-semibold sm:text-3xl">
                Things I wrote. Caution, might be hazardous.
              </p>
            </div>
          </header>
          <section className="flex flex-col justify-between gap-16 mx-auto mb-96 sm:mb-40-rem w-screen-65 sm:gap-10">
          <div>
              <p className="sm:text-lg">Event-driven Trading with Websockets, Scala, and Apache Mahout</p>
              <p><span>29 May 2021</span></p>
            </div>
            <div>
              <p className="sm:text-lg">Implementing BI SNAP Payment Gateway using Elixir and PostgreSQL</p>
              <p><span>29 May 2021</span> — <span>DIY Fintech Startup Series</span></p>
            </div>
            <div>
              <p className="sm:text-lg">Zapdive: GPT-powered tool to assist your research</p>
              <p><span>29 May 2021</span></p>
            </div>
          </section>
          <div className="grain"></div>
        </div>
      </main>
    </div>
  );
}
