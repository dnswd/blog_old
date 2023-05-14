// import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import NavBar from "@/components/NavBar";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { components } from "@components/MdxComponents";
import { GetStaticPropsContext } from "next/types";
import { useMemo } from "react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
// import * as remarkCodeTitles from 'remark-code-titles'

const ROOT = process.cwd();

export default function PostsLayout({ code, frontmatter }) {
  const MDXRenderer = useMemo(() => getMDXComponent(code), [code]);

  // return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
  return (
    <div className="relative text-rose-50">
      <NavBar />
      <main className="h-screen">
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-dark-canvas">
          <header className="relative mx-auto mt-40 mb-16 sm:mt-4/16 xl:mt-2/16 w-screen-65">
            <div className="prose prose-rose lg:prose-xl w-screen-50">
              <span className="italic mb-4">{frontmatter.publishedDate}</span>
              <h1 className="">
                {frontmatter.title}
              </h1>
            </div>
          </header>
          <section className="flex flex-col justify-between gap-16 mx-auto mb-96 sm:mb-40-rem w-screen-65 sm:gap-10">
              <article className="prose prose-rose lg:prose-xl prose-a:decoration-2">
                <MDXRenderer components={{ ...components }} />
              </article>
          </section>
          <div className="grain"></div>
        </div>
      </main>
    </div>
  //   <div className="max-w-screen-md m-auto p-6">
  //     <article className="prose">
  //       <MDXRenderer components={{ ...components }} />
  //     </article>
  //   </div>
  );
}

export async function getStaticPaths() {
  // const posts = getFiles('blog')
  const contentPath = path.join(ROOT, "content");
  const filePaths = fs.readdirSync(contentPath);
  // const files = getAllFilesRecursively(contentPath)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  // return paths.map((file) => file.slice(contentPath.length + 1).replace(/\\/g, '/'))
  const paths = filePaths.map((p) => ({
    params: {
      slug: p.replace(/(.mdx)/, ""),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{ slug: string }>
) {
  console.log("ZCZCZCZCZCZC");
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const fullPath = path.join(ROOT, "content", `${ctx.params!.slug}.mdx`);

  const { code, frontmatter } = await bundleMDX({
    file: fullPath,
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".js": "jsx",
        ".ts": "tsx",
      };
      return options;
    },
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath, remarkGfm,]
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeKatex]
      return options
    },
  });

  return { props: { code, frontmatter } };
}
