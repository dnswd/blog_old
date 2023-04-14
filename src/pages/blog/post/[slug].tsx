// import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { components } from "@components/MdxComponents";
import { MDXProvider } from "@mdx-js/react";

export default function PostsLayout() {
  return (
    <div className="max-w-screen-md m-auto p-6">
      <MDXProvider components={{ ...components }}>
        <article className="prose">
          <MDXRemote />
        </article>
      </MDXProvider>
    </div>
  );
}
