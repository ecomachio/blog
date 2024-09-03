import classNames from "classnames";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-[75ch] mx-auto ">
      <div
        className={classNames(markdownStyles["markdown"], "prose lg:prose-xl dark:prose-invert")}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
