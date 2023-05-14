import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Pre from './Pre'

type MdxComponent = { [k: string]: (props: any) => JSX.Element };

export const components: MdxComponent = {
  pre: Pre
};

interface MdxRenderProps {
  mdxSource: string
}

export default function MdxRender({ mdxSource, ...rest }: MdxRenderProps) {
  const MDXRenderer = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  return <MDXRenderer components={components} {...rest} />
}
