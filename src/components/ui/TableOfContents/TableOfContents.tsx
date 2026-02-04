import React from 'react';
import './TableOfContents.css';

interface TableOfContentsProps {
  chapters: {
    number: string;
    title: string;
    lessons: {
      title: string;
      path: string;
    }[];
  }[];
  currentSection?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapters, currentSection }) => {
  return (
    <aside className="chapter-toc">
      <h3>Sections</h3>
      <ul>
        {chapters.map((chapter, index) => {
          const sectionId = `unit-${index + 1}`;
          const isActive = currentSection === sectionId;
          const title = chapter.title;
          
          return (
            <li key={chapter.number}>
              <a 
                href={`#${sectionId}`}
                className={isActive ? 'active' : ''}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default TableOfContents;
