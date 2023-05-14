import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
// remark plugins
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
// rehype plugins
import rehypeKatex from "rehype-katex";
import rehypePrismPlus from 'rehype-prism-plus'

const ROOT = process.cwd()

export function getContentsSlugs(): string[] {
  const contentPath = path.join(ROOT, "content");
  const filePaths = fs.readdirSync(contentPath);
  const paths = filePaths.map((p) => p.replace(/(.mdx)/, ""));
  return paths
}

export async function compileMdxContent(slug: string) {
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

  const fullPath = path.join(ROOT, "content", `${slug}.mdx`);

  const { code, frontmatter } = await bundleMDX({
    file: fullPath,
    cwd: path.join(ROOT, 'src', 'components'),
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
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeKatex, [rehypePrismPlus, { ignoreMissing: true }]]
      return options
    },
  });

  return { code, frontmatter }
}

