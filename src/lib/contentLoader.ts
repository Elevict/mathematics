import { SUBJECT_FILES, CHAPTER_TITLES } from './subjects';

// Core types for the mathematics application
export interface Subject {
  id: string;
  title: string;
  description: string;
  path: string;
}

export interface Chapter {
  number: string;
  title: string;
  lessons: string[];  // Changed from Lesson[] to string[]
}

export interface Lesson {
  title: string;
  filename: string;
  path: string;
}

export interface MarkdownFile {
  content: string;
  frontmatter?: Record<string, any>;
}

// Extract chapter number from filename (handles multiple formats)
export const extractChapterNumber = (filename: string): string => {
  const match = filename.match(/(?:Chapter|Lecture) (\d+\.\d+)/) || 
                filename.match(/(\d+\.\d+)/);
  return match ? match[1] : '0';
};

// Extract title from filename (handles multiple formats)
export const extractTitle = (filename: string): string => {
  return filename
    .replace(/^(?:Chapter|Lecture) \d+\.\d+\s+/, '')
    .replace(/^\d+\.\d+\s+/, '')
    .replace(/\.md$/, '');
};

// Get chapter title based on chapter number and subject
export const getChapterTitle = (chapterNumber: string, subject: string): string => {
  const chapterNum = parseInt(chapterNumber.split('.')[0]);
  const subjectTitles = CHAPTER_TITLES[subject] || {};
  return subjectTitles[chapterNum.toString()] || `Chapter ${chapterNumber}`;
};

// Generate sequential lesson numbers
export const generateSequentialNumbers = (lessons: Lesson[]): Lesson[] => {
  return lessons.map((lesson, index) => ({
    ...lesson,
    title: `${index + 1}. ${lesson.title}`
  }));
};

// Load and organize content for a subject
export const loadSubjectContent = async (subjectId: string): Promise<Chapter[]> => {
  const files = SUBJECT_FILES[subjectId] || [];
  
  // Group files by chapter
  const chaptersMap: Record<string, string[]> = {};
  
  files.forEach(filename => {
    const chapterNum = extractChapterNumber(filename).split('.')[0];
    
    if (!chaptersMap[chapterNum]) {
      chaptersMap[chapterNum] = [];
    }
    
    chaptersMap[chapterNum].push(filename);  
  });

  // Convert to chapters array with sequential lesson numbering
  const chapters: Chapter[] = Object.entries(chaptersMap).map(([chapterNum, lessons]) => {
    const lessonCount = lessons.length;
    const fullChapterNumber = `${chapterNum}.${lessonCount}`;
    
    return {
      number: fullChapterNumber,
      title: getChapterTitle(fullChapterNumber, subjectId),
      lessons: lessons  // Changed from sequentialLessons to lessons (string[])
    };
  }).sort((a, b) => {
    const aNum = parseFloat(a.number);
    const bNum = parseFloat(b.number);
    return aNum - bNum;
  });

  return chapters;
};

// Load markdown file content
export const loadMarkdownFile = async (path: string): Promise<MarkdownFile | null> => {
  try {
    const response = await fetch(`/content/pages${path}`);
    if (!response.ok) return null;
    
    const content = await response.text();
    
    // Parse frontmatter if present
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    
    if (frontmatterMatch) {
      return {
        content: frontmatterMatch[2],
        frontmatter: parseFrontmatter(frontmatterMatch[1])
      };
    }
    
    return { content };
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return null;
  }
};

// Simple YAML frontmatter parser
const parseFrontmatter = (frontmatter: string): Record<string, any> => {
  const result: Record<string, any> = {};
  const lines = frontmatter.split('\n');
  
  lines.forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      // Try to parse as JSON, fallback to string
      try {
        result[key] = JSON.parse(value);
      } catch {
        result[key] = value;
      }
    }
  });
  
  return result;
};
