import fs from "fs";
import path from "path";
import matter from 'gray-matter'
import { bundleMDX } from "mdx-bundler";
// remark plugins
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
// rehype plugins
import rehypeKatex from "rehype-katex";
import rehypePrismPlus from 'rehype-prism-plus'

const ROOT = process.cwd()

export function getContentSlugs(folder: string): string[] {
  const contentPath = path.join(ROOT, folder);
  const fileName = fs.readdirSync(contentPath);
  const paths = fileName.map((p) => p.replace(/(.mdx)/, ""));
  return paths
}

export function getAllContentFrontmatter(folder: string) {
  const contentPath = path.join(ROOT, folder);
  const fileName = fs.readdirSync(contentPath);
  const matters = fileName.map((p) => {
    const content = fs.readFileSync(path.join(ROOT, folder, p), 'utf-8')
    const { data: frontmatter } = matter(content)
    return {
      ...frontmatter,
      slug: p.replace(/(.mdx)/, '')
    }
  })
  
  return matters
}

export async function compileMdxContent(folder: string, slug: string) {
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

  const fullPath = path.join(ROOT, folder, `${slug}.mdx`);

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

