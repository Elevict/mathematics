import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Custom component to render special containers
  const components = {
    // Handle custom div elements with card-block classes
    div: ({ className, children, ...props }: React.HTMLProps<HTMLDivElement>) => {
      if (className?.startsWith('card-block')) {
        return (
          <div className={className} {...props}>
            {children}
          </div>
        );
      }
      return <div className={className} {...props}>{children}</div>;
    },
    // Handle code blocks with syntax highlighting if needed
    code: ({ className, children, ...props }: React.HTMLProps<HTMLElement>) => {
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <code className={className} {...props}>
          {children}
        </code>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  // Pre-process content to convert GitHub-style alerts to container syntax
  const preprocessAlerts = (content: string): string => {
    const lines = content.split('\n');
    let result = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Check if this line starts with > [!type]
      const alertMatch = line.match(/^>\s+\[!(\w+)\]\s+(.+)$/);
      
      if (alertMatch) {
        const type = alertMatch[1].toLowerCase();
        const title = alertMatch[2];
        
        // Start collecting blockquote content
        result.push(`::: ${type} ${title}`);
        i++;
        
        // Collect all subsequent blockquote lines
        while (i < lines.length && lines[i].match(/^>/)) {
          const blockLine = lines[i];
          // Remove the > prefix and optional space
          const content = blockLine.replace(/^>\s?/, '');
          if (content.trim() !== '') {
            result.push(content);
          } else {
            result.push(''); // Preserve blank lines for paragraph breaks
          }
          i++;
        }
        
        result.push(':::');
      } else {
        result.push(line);
        i++;
      }
    }
    
    return result.join('\n');
  };

  // Process container syntax
  const processContainers = (content: string): string => {
    // Replace ::: syntax with div elements
    return content.replace(/:::\s*(\w+)\s*(.*)\n([\s\S]*?)\n:::/g, (match, type, title, content) => {
      const processedTitle = title
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
      
      return `<div class="card-block card-${type}">
<div class="card-block-title">${processedTitle}</div>
<div class="card-block-content">
${content.trim()}
</div>
</div>`;
    });
  };

  const processedContent = processContainers(preprocessAlerts(content));

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {processedContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
