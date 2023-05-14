import NavBar from "@/components/NavBar";
import Link from 'next/link';
import { getAllContentFrontmatter } from "@/lib/mdxUtil";

interface BlogProps {
  matters: {
    slug: string
    title: string
    publishedDate: string
  }[]
}

export default function Blog({ matters }: BlogProps) {
  return (
    <div className="relative text-rose-50">
      <NavBar />
      <main className="h-screen">
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-dark-canvas">
          <header className="relative mx-auto mt-40 mb-16 sm:mt-4/16 xl:mt-2/16 w-screen-65">
            <div className="w-screen-50">
              <p className="text-5xl font-semibold sm:text-3xl">
                I write stuffs about tech and daily discoveries.
              </p>
            </div>
          </header>
          <section className="flex flex-col justify-between gap-16 mx-auto mb-96 sm:mb-40-rem w-screen-65 sm:gap-10">
            {matters.map((matter, index) => (
              <Link href={`/blog/${matter.slug}`} key={index}>
                <p className="sm:text-lg">{matter.title}</p>
                <p><span>{matter.publishedDate}</span></p>
              </Link>
            ))}
            {/* <div>
              <p className="sm:text-lg">Event-driven Trading with Websockets, Scala, and Apache Mahout</p>
              <p><span>29 May 2021</span> — <span>#Tech</span></p>
            </div>
            <div>
              <p className="sm:text-lg">Implementing BI SNAP Payment Gateway using Elixir and PostgreSQL</p>
              <p><span>29 May 2021</span> — <span>DIY Fintech Startup Series</span> — <span>#Tech</span></p>
            </div>
            <div>
              <p className="sm:text-lg">Zapdive: GPT-powered tool to assist your research</p>
              <p><span>29 May 2021</span> — <span>#Tech</span></p>
            </div> */}
          </section>
          <div className="grain"></div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const matters = getAllContentFrontmatter();
  return { props: { matters } };
}
