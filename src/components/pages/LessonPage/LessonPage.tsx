import React, { useEffect, useMemo, useState } from 'react';
import Button from '../../ui/Button/Button';
import MarkdownRenderer from '../../MarkdownRenderer/MarkdownRenderer';
import { useMathJax } from '../../../lib/useMathJax';
import './LessonPage.css';

interface LessonPageProps {
  subjectId: string;
  mdKey: string;
  onBackToSubject: () => void;
  onNavigateLesson?: (direction: 'prev' | 'next' | 'up' | 'down') => void;
  hasPrevLesson?: boolean;
  hasNextLesson?: boolean;
  hasUpLesson?: boolean;
  hasDownLesson?: boolean;
  chapterInfo?: string;
  lessonInfo?: string;
}

const LessonPage: React.FC<LessonPageProps> = ({ 
  subjectId, 
  mdKey, 
  onBackToSubject, 
  onNavigateLesson, 
  hasPrevLesson = false, 
  hasNextLesson = false, 
  hasUpLesson = false, 
  hasDownLesson = false, 
  chapterInfo = 'Chapter 1', 
  lessonInfo = 'Lesson 1' 
}) => {
  const { typeset } = useMathJax();

  const mdContext = useMemo(() => {
    return (require as any).context('../../../md', true, /\.md$/);
  }, []);

  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const stripFrontmatter = (raw: string) => raw.replace(/^---\n[\s\S]*?\n---\n/, '');

  useEffect(() => {
    let cancelled = false;

    const getUrl = (key: string): string => {
      const mod = mdContext(key);
      return typeof mod === 'string' ? mod : mod.default;
    };

    const load = async () => {
      const url = getUrl(mdKey);
      const res = await fetch(url);
      const raw = await res.text();
      const cleaned = stripFrontmatter(raw);

      const firstHeading = cleaned.match(/^#\s+(.+)$/m);
      const derivedTitle = firstHeading ? firstHeading[1].trim() : mdKey.split('/').pop() || 'Lesson';

      if (cancelled) return;
      setTitle(derivedTitle);
      setContent(cleaned);
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [mdContext, mdKey, subjectId]);

  useEffect(() => {
    if (!content) return;
    const t = setTimeout(() => typeset(), 0);
    return () => clearTimeout(t);
  }, [content, typeset]);

  return (
    <div className="lesson-page">
      <div className="nav-header">
        {/* Top row with back button and info badges */}
        <div className="nav-top">
          <div className="nav-left">
            <Button onClick={onBackToSubject} variant="primary" size="medium">
              ← Back to Subject
            </Button>
          </div>
          <div className="nav-right">
            <div className="nav-info">
              <div className="info-badge chapter-badge">{chapterInfo}</div>
              <div className="info-badge lesson-badge">{lessonInfo}</div>
            </div>
          </div>
        </div>

        {/* Center row with title and black underline */}
        <div className="nav-center">
          <h1>{title}</h1>
        </div>

        {/* Bottom row with lesson navigation */}
        <div className="nav-navigation">
          <div className="nav-button-group">
            {hasPrevLesson && onNavigateLesson && (
              <Button onClick={() => onNavigateLesson('prev')} variant="primary" size="medium">
                ← Previous
              </Button>
            )}
            {hasUpLesson && onNavigateLesson && (
              <Button onClick={() => onNavigateLesson('up')} variant="primary" size="medium">
                ↑ Up
              </Button>
            )}
          </div>
          <div className="nav-button-group">
            {hasDownLesson && onNavigateLesson && (
              <Button onClick={() => onNavigateLesson('down')} variant="primary" size="medium">
                ↓ Down
              </Button>
            )}
            {hasNextLesson && onNavigateLesson && (
              <Button onClick={() => onNavigateLesson('next')} variant="primary" size="medium">
                Next →
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="lesson-content-wrapper">
        <div className="lesson-content">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
