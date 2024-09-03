import { remark } from "remark";
import html from "remark-html";
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkParse) // Parse markdown.
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(remarkRehype) // Turn it into HTML.
    .use(rehypeStringify) // Serialize HTML.
    .process(markdown);
  return result.toString();
}
