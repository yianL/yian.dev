import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
