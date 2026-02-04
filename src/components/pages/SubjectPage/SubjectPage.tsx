import React, { useMemo, useState, useEffect } from 'react';
import Hero from '../../ui/Hero/Hero';
import Grid from '../../ui/Grid/Grid';
import Card from '../../ui/Card/Card';
import TableOfContents from '../../ui/TableOfContents/TableOfContents';
import { CHAPTER_TITLES } from '../../../lib/subjects';
import './SubjectPage.css';

interface SubjectWithChapters {
  id: string;
  title: string;
  description: string;
  path: string;
  chapters: {
    number: string;
    title: string;
    lessons: string[];
  }[];
}

interface SubjectPageProps {
  subject: SubjectWithChapters;
  onLessonClick: (mdKey: string) => void;
}

type LessonLink = {
  mdKey: string;
  filename: string;
  chapter: string;
  lesson: string;
  order: number;
  title: string;
};

type SectionLink = {
  chapterNumber: string;
  title: string;
  lessons: LessonLink[];
};

const SubjectPage: React.FC<SubjectPageProps> = ({ subject, onLessonClick }) => {
  const mdContext = useMemo(() => {
    return (require as any).context('../../../md', true, /\.md$/);
  }, []);

  const extractLessonInfo = (filename: string) => {
    const match = filename.match(/(?:Chapter|Lecture)\s+(\d+)\.(\d+)/i) || filename.match(/(\d+)\.(\d+)/);
    const chapter = match?.[1] ?? '0';
    const lesson = match?.[2] ?? '0';
    const title = filename
      .replace(/^(?:Chapter|Lecture)\s+\d+\.\d+\s+/i, '')
      .replace(/^\d+\.\d+\s+/, '')
      .replace(/\.md$/i, '');
    const order = parseInt(chapter, 10) * 1000 + parseInt(lesson, 10);
    return { chapter, lesson, title, order };
  };

  const sections: SectionLink[] = useMemo(() => {
    const keys: string[] = mdContext.keys();
    const subjectKeys = keys
      .filter((k) => k.startsWith(`./${subject.id}/`))
      .filter((k) => !k.toLowerCase().endsWith('/index.md'));

    const lessons: LessonLink[] = subjectKeys.map((mdKey) => {
      const filename = mdKey.split('/').pop() || mdKey;
      const info = extractLessonInfo(filename);
      return {
        mdKey,
        filename,
        chapter: info.chapter,
        lesson: info.lesson,
        order: info.order,
        title: info.title,
      };
    });

    const byChapter = new Map<string, LessonLink[]>();
    for (const lesson of lessons) {
      const arr = byChapter.get(lesson.chapter) ?? [];
      arr.push(lesson);
      byChapter.set(lesson.chapter, arr);
    }

    return Array.from(byChapter.entries())
      .sort(([a], [b]) => parseInt(a, 10) - parseInt(b, 10))
      .map(([chapterNumber, chapterLessons]) => {
        const titleFromMap = (CHAPTER_TITLES as any)?.[subject.id]?.[chapterNumber];
        const title = titleFromMap || `Chapter ${chapterNumber}`;
        const sorted = chapterLessons.slice().sort((a, b) => a.order - b.order);
        return {
          chapterNumber,
          title,
          lessons: sorted,
        };
      });
  }, [mdContext, subject.id]);

  const tocChapters = sections.map((section) => ({
    number: section.chapterNumber,
    title: `Chapter ${section.chapterNumber}: ${section.title}`,
    lessons: [],
  }));

  return (
    <div className="chapter-page">
      <Grid columnSizes={[80, 20]} gap="2rem" className="chapter-layout">
        <div className="chapter-sections">
          <Hero
            title={subject.title}
            subtitle={subject.description}
            size="medium"
          />

          <div className="chapter-content">
            {sections.map((section, chapterIndex) => {
              const sectionId = `unit-${chapterIndex + 1}`;

              return (
                <section key={section.chapterNumber} id={sectionId} className="chapter-section">
                  <Card
                    title={`Chapter ${section.chapterNumber}: ${section.title}`}
                    description={`${section.lessons.length} lessons`}
                  >
                    <div className="chapter-links">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <button
                          key={lesson.mdKey}
                          type="button"
                          className="lesson-link-btn"
                          onClick={() => onLessonClick(lesson.mdKey)}
                        >
                          <strong>{lessonIndex + 1}.</strong> {lesson.title}
                        </button>
                      ))}
                    </div>
                  </Card>
                </section>
              );
            })}
          </div>
        </div>

        <div className="chapter-sidebar">
          <div className="hero-spacer"></div>
          <TableOfContents chapters={tocChapters} />
        </div>
      </Grid>
    </div>
  );
};

export default SubjectPage;
