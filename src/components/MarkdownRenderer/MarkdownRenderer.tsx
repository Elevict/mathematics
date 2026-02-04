import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useMathJax } from '../../lib/useMathJax';
import './MarkdownRenderer.css';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const { typeset } = useMathJax();

  // Strip YAML frontmatter from content
  const processedContent = content.replace(/^---[\s\S]*?^---\r?\n?\r?\n?/m, '');
  
  // Debug: log the first few lines of content before and after processing
  console.log('=== MARKDOWN RENDERER DEBUG ===');
  console.log('Original content first 200 chars:', content.substring(0, 200));
  console.log('Processed content first 200 chars:', processedContent.substring(0, 200));
  console.log('=== END DEBUG ===');

  useEffect(() => {
    const timer = setTimeout(() => typeset(), 200);
    return () => clearTimeout(timer);
  }, [processedContent, typeset]);

  // MathJax wrapper components
  const MathJaxParagraph: React.FC<any> = ({ children, ...props }) => {
    useEffect(() => {
      setTimeout(() => typeset(), 100);
    }, []);
    return <p {...props}>{children}</p>;
  };

  const MathJaxH1: React.FC<any> = ({ children, ...props }) => {
    useEffect(() => {
      setTimeout(() => typeset(), 100);
    }, []);
    return <h1 {...props}>{children}</h1>;
  };

  const MathJaxH2: React.FC<any> = ({ children, ...props }) => {
    useEffect(() => {
      setTimeout(() => typeset(), 100);
    }, []);
    return <h2 {...props}>{children}</h2>;
  };

  const MathJaxH3: React.FC<any> = ({ children, ...props }) => {
    useEffect(() => {
      setTimeout(() => typeset(), 100);
    }, []);
    return <h3 {...props}>{children}</h3>;
  };

  const CustomBlockquote = ({ children }: { children?: React.ReactNode }) => {
    console.log('blockquote children:', children);
    console.log('children type:', typeof children);
    
    if (!children) {
      return <blockquote />;
    }

    const childArray = React.Children.toArray(children);
    console.log('childArray:', childArray);

    // Always treat first paragraph as title
    const firstChild = childArray[0];
    console.log('firstChild:', firstChild);
    console.log('firstChild.type:', (firstChild as any)?.type);
    console.log('firstChild.props:', (firstChild as any)?.props);
    console.log('typeof firstChild:', typeof firstChild);
    console.log('React.isValidElement(firstChild):', React.isValidElement(firstChild));
    
    let titleContent = '';
    let remainingContent: React.ReactNode[] = [];

    // Find the first non-whitespace element that has content
    let contentElement = null;
    let contentIndex = -1;
    
    for (let i = 0; i < childArray.length; i++) {
      const child = childArray[i];
      if (typeof child === 'string' && child.trim() === '') {
        continue; // Skip whitespace
      }
      if (React.isValidElement(child)) {
        contentElement = child;
        contentIndex = i;
        break;
      }
    }
    
    console.log('contentElement:', contentElement);
    console.log('contentIndex:', contentIndex);
    
    if (contentElement) {
      const elementType = (contentElement as any).type;
      console.log('elementType:', elementType);
      
      if (elementType === 'p') {
        const pProps = contentElement.props as { children?: React.ReactNode };
        console.log('pProps.children:', pProps.children);
        
        const rawText = React.Children.toArray(pProps.children ?? [])
          .map((c) => {
            if (typeof c === 'string') return c;
            if (React.isValidElement(c)) {
              const props = c.props as { children?: React.ReactNode };
              return React.Children.toArray(props.children ?? []).join('');
            }
            return '';
          })
          .join('')
          .trim();
          
        console.log('rawText:', rawText);

        // Split by newline and take first line for title, rest for content
        const lines = rawText.split('\n');
        const firstLine = lines[0].trim();
        const remainingLines = lines.slice(1).join('\n').trim();
        
        console.log('firstLine:', firstLine);
        console.log('remainingLines:', remainingLines);

        // Check if first line is a callout with type
        const match = firstLine.match(/^\[!([A-Za-z0-9_-]+)\]\s*(.*)$/);
        console.log('match:', match);
        
        if (match && match[1] && match[2]) {
          const calloutType = match[1].trim();
          const calloutTitle = match[2].trim();
          const capitalizedType = calloutType.charAt(0).toUpperCase() + calloutType.slice(1);
          
          // Check if the title already contains the type name to avoid duplication
          if (calloutTitle.toLowerCase().includes(calloutType.toLowerCase())) {
            titleContent = `**${calloutTitle}**`;
          } else {
            titleContent = `**${capitalizedType} ${calloutTitle}**`;
          }
          
          // Create remaining content with the rest of the lines
          if (remainingLines) {
            remainingContent = [
              ...childArray.slice(contentIndex + 1),
              remainingLines
            ];
          } else {
            remainingContent = childArray.slice(contentIndex + 1);
          }
        } else if (match && match[1] && !match[2]) {
          // Handle case where there's no title after [!type]
          const calloutType = match[1].trim();
          const capitalizedType = calloutType.charAt(0).toUpperCase() + calloutType.slice(1);
          titleContent = `**${capitalizedType}**`;
          // Create remaining content with the rest of the lines
          if (remainingLines) {
            remainingContent = [
              ...childArray.slice(contentIndex + 1),
              remainingLines
            ];
          } else {
            remainingContent = childArray.slice(contentIndex + 1);
          }
        } else {
          // Regular blockquote - make first line bold title
          titleContent = `**${firstLine}**`;
          // Create remaining content with the rest of the lines
          if (remainingLines) {
            remainingContent = [
              ...childArray.slice(contentIndex + 1),
              remainingLines
            ];
          } else {
            remainingContent = childArray.slice(contentIndex + 1);
          }
        }
      } else {
        // Not a paragraph - try to extract text directly
        const elementProps = contentElement.props as { children?: React.ReactNode };
        const rawText = React.Children.toArray(elementProps.children ?? [])
          .map((c) => {
            if (typeof c === 'string') return c;
            if (React.isValidElement(c)) {
              const props = c.props as { children?: React.ReactNode };
              return React.Children.toArray(props.children ?? []).join('');
            }
            return '';
          })
          .join('')
          .trim();
          
        console.log('rawText from non-p element:', rawText);
        
        const lines = rawText.split('\n');
        const firstLine = lines[0].trim();
        const remainingLines = lines.slice(1).join('\n').trim();
        
        const match = firstLine.match(/^\[!([A-Za-z0-9_-]+)\]\s*(.*)$/);
        console.log('match from non-p:', match);
        
        if (match && match[1] && match[2]) {
          const calloutType = match[1].trim();
          const calloutTitle = match[2].trim();
          const capitalizedType = calloutType.charAt(0).toUpperCase() + calloutType.slice(1);
          
          // Check if the title already contains the type name to avoid duplication
          if (calloutTitle.toLowerCase().includes(calloutType.toLowerCase())) {
            titleContent = `**${calloutTitle}**`;
          } else {
            titleContent = `**${capitalizedType} ${calloutTitle}**`;
          }
          
          if (remainingLines) {
            remainingContent = [
              ...childArray.slice(contentIndex + 1),
              remainingLines
            ];
          } else {
            remainingContent = childArray.slice(contentIndex + 1);
          }
        } else if (match && match[1] && !match[2]) {
          // Handle case where there's no title after [!type]
          const calloutType = match[1].trim();
          const capitalizedType = calloutType.charAt(0).toUpperCase() + calloutType.slice(1);
          titleContent = `**${capitalizedType}**`;
          if (remainingLines) {
            remainingContent = [
              ...childArray.slice(contentIndex + 1),
              remainingLines
            ];
          } else {
            remainingContent = childArray.slice(contentIndex + 1);
          }
        } else {
          titleContent = `**${firstLine}**`;
          if (remainingLines) {
            remainingContent = [
              ...childArray.slice(contentIndex + 1),
              remainingLines
            ];
          } else {
            remainingContent = childArray.slice(contentIndex + 1);
          }
        }
      }
    } else {
      // Fallback for non-paragraph first child
      titleContent = '**Note**';
      remainingContent = childArray;
    }

    console.log('titleContent:', titleContent);
    console.log('remainingContent:', remainingContent);

    // Clean leading "> " from content lines and extract text properly
    const cleanedContent = remainingContent.map((node) => {
      if (typeof node === 'string') {
        return node.replace(/^>\s?/, '');
      }

      if (React.isValidElement(node)) {
        const props = node.props as { children?: React.ReactNode };
        if (!props.children) return node;

        // Recursively clean nested content
        const cleanChildren = (children: React.ReactNode): React.ReactNode => {
          if (typeof children === 'string') {
            return children.replace(/^>\s?/, '');
          }
          if (Array.isArray(children)) {
            return children.map(cleanChildren);
          }
          if (React.isValidElement(children)) {
            const childProps = children.props as { children?: React.ReactNode };
            return React.cloneElement(children, {
              children: cleanChildren(childProps.children)
            } as any);
          }
          return children;
        };

        return React.cloneElement(node, { 
          children: cleanChildren(props.children) 
        } as any);
      }

      return node;
    });

    // Render title with markdown support
    const titleElement = (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml={false}
        allowedElements={['strong', 'em', 'code', 'a', 'p']}
        unwrapDisallowed={true}
      >
        {titleContent}
      </ReactMarkdown>
    );

    // Check if this was a callout to determine styling
    const isCallout = titleContent.match(/^\*\*([A-Za-z]+)(?:\s|\*\*)/);
    console.log('isCallout match:', isCallout);
    const calloutType = isCallout ? isCallout[1].toLowerCase() : 'note';
    console.log('detected calloutType:', calloutType);

    return (
      <div className={`card-block card-${calloutType}`}>
        <div className="card-block-title">{titleElement}</div>

        {cleanedContent.length > 0 && (
          <div className="card-block-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[]}
              components={{
                p: MathJaxParagraph,
                h1: MathJaxH1,
                h2: MathJaxH2,
                h3: MathJaxH3,
              }}
            >
              {cleanedContent.map(node => {
                if (typeof node === 'string') {
                  return node;
                }
                if (React.isValidElement(node)) {
                  // Extract text content from React element
                  const extractText = (element: React.ReactNode): string => {
                    if (typeof element === 'string') {
                      return element;
                    }
                    if (Array.isArray(element)) {
                      return element.map(extractText).join('');
                    }
                    if (React.isValidElement(element)) {
                      const props = element.props as { children?: React.ReactNode };
                      return extractText(props.children || '');
                    }
                    return '';
                  };
                  return extractText(node);
                }
                return '';
              }).join('\n')}
            </ReactMarkdown>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="markdown-renderer">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: MathJaxParagraph,
          h1: MathJaxH1,
          h2: MathJaxH2,
          h3: MathJaxH3,
          blockquote: CustomBlockquote,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
