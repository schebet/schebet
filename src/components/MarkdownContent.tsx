import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const components: Components = {
    // Custom image rendering with srcset support
    img: ({ node, alt, src, ...props }) => {
      const imgProps = props as any;
      const srcset = imgProps['srcset'];
      const url = imgProps['url'];
      
      return (
        <figure className="my-8">
          <img
            src={url || src}
            srcSet={srcset}
            alt={alt || ''}
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
          {alt && (
            <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    },
    
    // Custom heading rendering
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
    ),
    
    // Custom paragraph rendering
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-6 text-foreground/90">{children}</p>
    ),
    
    // Custom blockquote rendering
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-6 italic bg-muted/30 rounded-r-lg">
        {children}
      </blockquote>
    ),
    
    // Custom list rendering
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg text-foreground/90">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-lg text-foreground/90">
        {children}
      </ol>
    ),
    
    // Custom link rendering
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    
    // Custom code rendering
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        );
      }
      return (
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-6">
          <code className={className}>{children}</code>
        </pre>
      );
    },
  };

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
