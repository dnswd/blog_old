import NavBar from "@/components/NavBar";
import MdxRender from "@/components/MdxRender";
import { GetStaticPropsContext } from "next/types";
import { getContentSlugs, compileMdxContent } from "@/lib/mdxUtil";

interface PostLayoutProps {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
}

export default function PostsLayout({ code, frontmatter }: PostLayoutProps) {
  return (
    <div className="relative text-rose-50">
      <NavBar />
      <main className="h-screen">
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-dark-canvas">
          <header className="relative mx-auto mt-40 mb-16 sm:mt-4/16 xl:mt-2/16 w-screen-65">
            <div className="prose prose-rose lg:prose-xl w-screen-50">
              <p className="italic mb-4">{frontmatter.publishedDate}</p>
              <h1>{frontmatter.title}</h1>
            </div>
          </header>
          <section className="flex flex-col justify-between gap-16 mx-auto mb-96 sm:mb-40-rem w-screen-65 sm:gap-10">
            <article className="prose prose-rose lg:prose-xl prose-a:decoration-2">
              <MdxRender mdxSource={code} />
            </article>
          </section>
          <div className="grain"></div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = getContentSlugs();
  const paths = slugs.map((contentSlug: string) => ({
    params: {
      slug: contentSlug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{ slug: string }>
) {
  const { code, frontmatter } = await compileMdxContent(ctx.params!.slug);

  return { props: { code, frontmatter } };
}
