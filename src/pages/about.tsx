import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <div className="relative text-rose-50">
      <NavBar />
      <main className="h-screen">
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-dark-canvas">
          <header className="relative mx-auto my-40 sm:my-4/16 xl:my-2/16 w-screen-65">
            <div className="w-\screen-50">
              <p className="text-5xl sm:text-7xl">
                I’m Dennis — a Multidisciplinary Designer with a focus on Motion,
                Interactive Design and 3D.
              </p>
            </div>
            <div className="absolute right-0 block h-20 mt-20 top-full w-7">
              <div className="absolute bottom-0 h-20 border-r-2 left-1/2 border-rose-50"></div>
              <div className="absolute w-5 h-5 border-t-2 border-r-2 bottom-6 left-1/2 border-rose-50 rotate-135 origin-top-left-5-95"></div>
            </div>
          </header>
          <section className="flex flex-col justify-between gap-16 mx-auto mb-40 sm:flex-row my-96 sm:mt-40-rem w-screen-65 sm:gap-0">
            <article className="flex flex-col w-full text-3xl gap-28 sm:w-3/5 sm:text-5xl">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                obcaecati ex distinctio enim sapiente maiores, facere alias,
                ratione assumenda, nobis reiciendis. Unde, ratione laborum
                nostrum officiis modi sunt id eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                obcaecati ex distinctio enim sapiente maiores, facere alias,
                ratione assumenda, nobis reiciendis. Unde, ratione laborum
                nostrum officiis modi sunt id eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                obcaecati ex distinctio enim sapiente maiores, facere alias,
                ratione assumenda, nobis reiciendis. Unde, ratione laborum
                nostrum officiis modi sunt id eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                obcaecati ex distinctio enim sapiente maiores, facere alias,
                ratione assumenda, nobis reiciendis. Unde, ratione laborum
                nostrum officiis modi sunt id eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                obcaecati ex distinctio enim sapiente maiores, facere alias,
                ratione assumenda, nobis reiciendis. Unde, ratione laborum
                nostrum officiis modi sunt id eum?
              </p>
            </article>
            <div className="flex flex-col w-full gap-16 text-xl sm:w-1/5">
              <article className="flex flex-col gap-8">
                <h2>experience</h2>
                <p className="leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  vitae laborum recusandae fugit laudantium doloribus adipisci
                  ab unde ad voluptatibus doloremque quis expedita aut delectus
                  dolorum aspernatur, ex obcaecati laboriosam.
                </p>
              </article>
              <article className="flex flex-col gap-8">
                <h2>experience</h2>
                <p className="leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  vitae laborum recusandae fugit laudantium doloribus adipisci
                  ab unde ad voluptatibus doloremque quis expedita aut delectus
                  dolorum aspernatur, ex obcaecati laboriosam.
                </p>
              </article>
              <article className="flex flex-col gap-8">
                <h2>experience</h2>
                <p className="leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  vitae laborum recusandae fugit laudantium doloribus adipisci
                  ab unde ad voluptatibus doloremque quis expedita aut delectus
                  dolorum aspernatur, ex obcaecati laboriosam.
                </p>
              </article>
            </div>
          </section>
          <div className="grain"></div>
        </div>
      </main>
    </div>
  );
}
