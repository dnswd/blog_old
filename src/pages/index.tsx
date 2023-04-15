import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className="relative">
      <nav className="fixed pt-home-padding w-full z-10">
        <div className="flex justify-between m-auto w-screen-65">
          <Link href="/">dnswd.id</Link>
          <ul className="hidden sm:flex flex-row sm:gap-16">
            <li>
              <Link href="/blog">blog</Link>
            </li>
            <li>
              <Link href="/projects">project</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
          <Link href="mailto:hello@dnswd.id">hello@dnswd.id</Link>
        </div>
      </nav>
      <main className="h-screen">
        <div className="absolute overflow-hidden left-0 top-0 w-full">
          <header className="relative my-40 sm:my-4/16 xl:my-2/16 mx-auto w-screen-65">
            <div className="w-screen-50">
              <p className="text-5xl sm:text-7xl">
                I’m Thieb — a Multidisciplinary Designer with a focus on Motion, Interactive Design and 3D.
              </p>
            </div>
            <div className="absolute block mt-20 right-0 top-full h-20 w-7">
              <div className="absolute h-20 left-1/2 bottom-0 border-r-2 border-black"></div>
              <div className="absolute h-5 w-5 bottom-6 left-1/2 border-t-2 border-r-2 border-black rotate-135 origin-top-left-5-95"></div>
            </div>
          </header>
          <section className="flex flex-col sm:flex-row my-96 sm:my-40-rem mx-auto w-screen-65 justify-between gap-16 sm:gap-0">
            <article className="flex flex-col gap-28 w-full sm:w-3/5 text-3xl sm:text-5xl">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati ex distinctio enim sapiente maiores, facere alias, ratione assumenda, nobis reiciendis. Unde, ratione laborum nostrum officiis modi sunt id eum?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati ex distinctio enim sapiente maiores, facere alias, ratione assumenda, nobis reiciendis. Unde, ratione laborum nostrum officiis modi sunt id eum?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati ex distinctio enim sapiente maiores, facere alias, ratione assumenda, nobis reiciendis. Unde, ratione laborum nostrum officiis modi sunt id eum?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati ex distinctio enim sapiente maiores, facere alias, ratione assumenda, nobis reiciendis. Unde, ratione laborum nostrum officiis modi sunt id eum?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati ex distinctio enim sapiente maiores, facere alias, ratione assumenda, nobis reiciendis. Unde, ratione laborum nostrum officiis modi sunt id eum?</p>
            </article>
            <div className="flex flex-col gap-16 w-full sm:w-1/5 text-xl">
              <article className="flex flex-col gap-8">
                <h2>experience</h2>
                <p className="leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae laborum recusandae fugit laudantium doloribus adipisci ab unde ad voluptatibus doloremque quis expedita aut delectus dolorum aspernatur, ex obcaecati laboriosam.</p>
              </article>
              <article className="flex flex-col gap-8">
                <h2>experience</h2>
                <p className="leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae laborum recusandae fugit laudantium doloribus adipisci ab unde ad voluptatibus doloremque quis expedita aut delectus dolorum aspernatur, ex obcaecati laboriosam.</p>
              </article>
              <article className="flex flex-col gap-8">
                <h2>experience</h2>
                <p className="leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae laborum recusandae fugit laudantium doloribus adipisci ab unde ad voluptatibus doloremque quis expedita aut delectus dolorum aspernatur, ex obcaecati laboriosam.</p>
              </article>
            </div>
          </section>
          <div className="grain"></div>
        </div>
      </main>
    </div>
  );
}
