import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "@components/MdxComponents";
import { MDXProvider } from "@mdx-js/react";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

interface Props {
  source: MDXRemoteSerializeResult;
}

const serializeOption = {
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }
}

export default function PostsLayout({ source }: Props) {
  return (
    <div className="max-w-screen-md m-auto p-6">
      <MDXProvider components={components}>
        <article className="prose">
          <MDXRemote {...source} />
        </article>
      </MDXProvider>
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `
This is a markdown demo. Below are heading examples.

# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

Below is the alternate syntax

Heading level 1
===============

Heading level 2
---------------

With IDs TODO

{/* <!-- ### My Great Heading \{custom-id\} --> */}

Link to ID

[Heading IDs](#heading-ids)



Paragraphs.

I really like using Markdown.

I think I'll use it to format all of my documents from now on. 

With line breaks

This is the first line.  
And this is the second line.



Emphasis example

I just love **bold text**.

I just love __bold text__.

Love**is**bold



Italic text example

Italicized text is the *cat's meow*.

Italicized text is the _cat's meow_.

A*cat*meow



Mix of bold and italics

This text is ***really important***.

This text is ___really important___.

This text is __*really important*__.

This text is **_really important_**.

This is really***very***important text.



Striketrough TODO

~~The world is flat.~~ We now know that the world is round.



Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.



Ordered lists

1. First item
2. Second item
3. Third item
4. Fourth item 

Numbers don't matter

1. First item
1. Second item
1. Third item
1. Fourth item 

Order doesn't really matter

1. First item
8. Second item
3. Third item
5. Fourth item 

With nested items

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item 

With indented paragraph

1. First item  
  Blue light.
2. Second item  
  Green light.
3. Third item  
  Red light.
4. Fourth item  
  Rainbow light.

Ordered lists

- First item
- Second item
- Third item
- Fourth item 
- 1968\\. A great year!

With star

* First item
* Second item
* Third item
* Fourth item

With plus

+ First item
+ Second item
+ Third item
+ Fourth item 

Indented
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item 

With indented paragraph

- First item  
  Blue light.
- Second item  
  Green light.
- Third item  
  Red light.
- Fourth item  
  Rainbow light.



Elements in lists.

Below with a paragraph

* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

Below with a blockquote

* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

Below with code blocks

1. Open the file.
2. Find the following code block on line 21:
    
    \`\`\`
        <html>
          <head>
            <title>Test</title>
          </head>
    \`\`\`

3. Update the title to match the name of your website.

Below with images

1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Tux, the Linux mascot](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100)

3. Close the file.

List within lists

1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item



Task lists TODO

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media



Inline codes

At the command prompt, type \`nano\`.

\`\`Use \`code\` in your Markdown file.\`\`



Code blocks

\`\`\`
<html>
  <head>
    <title>Test</title>
  </head>
\`\`\`

With syntax highlighting TODO

\`\`\`json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`



Horizontal rules

***

---

_________________



Links

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

With titles

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

URL and email adresses TODO automatic url linking

https://www.markdownguide.org  
fake@example.com

With formatting

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [\`code\`](#code).

Reference style

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"



Images

![The San Juan Mountains are beautiful!](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=1080 "San Juan Mountains")


Tables TODO

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

With varying widths

| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |

With alignment

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |



Footnotes TODO

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    \`{ my code }\`

    Add as many paragraphs as you like.



Definition lists TODO

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.



Emoji shortcodes TODO

Gone camping! :tent: Be back soon.

That is so funny! :joy:



Highlight TODO

I need to highlight these ==very important words==.



Subscript TODO

H~2~O



Superscript TODO

X^2^



Math TODO

$\\sqrt\{a^2 + b^2\}$

Math block

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

`;
  const mdxSource = await serialize(source, serializeOption);
  return { props: { source: mdxSource } };
}
