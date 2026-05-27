import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({
  content,
  className = "",
}: MarkdownContentProps) {
  return (
    <div
      className={`prose prose-sm max-w-none min-w-0 prose-headings:text-heading prose-headings:font-bold prose-p:text-foreground/70 prose-p:leading-relaxed prose-p:wrap-break-word prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:break-all prose-strong:text-foreground prose-code:text-accent prose-code:bg-surface-light prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:wrap-break-word prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto prose-pre:max-w-full prose-pre:p-4 prose-pre:text-xs md:prose-pre:text-sm prose-pre:whitespace-pre prose-li:text-foreground/70 prose-li:wrap-break-word prose-blockquote:border-accent prose-blockquote:text-muted prose-img:rounded-lg prose-img:max-w-full prose-img:h-auto prose-table:block prose-table:w-full prose-table:overflow-x-auto prose-th:text-foreground prose-td:wrap-break-word ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          pre: ({ children }) => (
            <pre className="overflow-x-auto max-w-full rounded-lg border border-border bg-surface p-4">
              {children}
            </pre>
          ),
          code: ({ className: codeClassName, children, ...props }) => {
            const isInline = !codeClassName;
            if (isInline) {
              return (
                <code
                  className="wrap-break-word rounded bg-surface-light px-1 py-0.5 text-accent"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={`${codeClassName} whitespace-pre`} {...props}>
                {children}
              </code>
            );
          },
          img: ({ alt, ...props }) => (
            <img
              {...props}
              alt={alt ?? ""}
              className="h-auto max-w-full rounded-lg border border-border"
              loading="lazy"
            />
          ),
          table: ({ children }) => (
            <div className="my-6 w-full overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse">{children}</table>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
