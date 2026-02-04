import React, { useState } from 'react';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import HomePage from './components/pages/HomePage/HomePage';
import SubjectPage from './components/pages/SubjectPage/SubjectPage';
import LessonPage from './components/pages/LessonPage/LessonPage';
import './styles/global.css';
import './components/common/Header/Header.css';
import './components/common/Footer/Footer.css';

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

// Embedded content data
const SUBJECTS: SubjectWithChapters[] = [
  {
    id: 'algebra',
    title: 'Algebra',
    description: 'Master equations, functions, polynomials, and systems—perfect for precalculus.',
    path: '/algebra/',
    chapters: [
      {
        number: '1.0',
        title: 'Fundamentals',
        lessons: [
          '1. Review of Algebra',
          '2. Equations and Inequalities'
        ]
      },
      {
        number: '2.0', 
        title: 'Functions and Graphs',
        lessons: [
          '1. Functions',
          '2. Transformations'
        ]
      }
    ]
  },
  {
    id: 'calculus1',
    title: 'Calculus 1',
    description: 'Single-variable calculus: limits, derivatives, integration, and applications.',
    path: '/calculus1/',
    chapters: [
      {
        number: '1.0',
        title: 'Foundations',
        lessons: [
          '1. Functions and Change',
          '2. Exponential Functions',
          '3. New Functions from Old',
          '4. Logarithmic Functions',
          '5. Trigonometric Functions',
          '6. Powers, Polynomials, and Rational Functions',
          '7. Introduction to Limits and Continuity',
          '8. Extending the Idea of a Limit',
          '9. Further Limit Calculations Using Algebra'
        ]
      },
      {
        number: '2.0',
        title: 'Derivatives',
        lessons: [
          '1. How Do We Measure Speed',
          '2. The Derivative at a Point',
          '3. The Derivative Function',
          '4. Interpretations of the Derivative',
          '5. The Second Derivative',
          '6. Derivatives of Trigonometric Functions',
          '7. The Chain Rule',
          '8. Derivatives of Inverse Functions',
          '9. Implicit Functions',
          '10. Hyperbolic Functions',
          '11. Linear Approximation and the Derivative',
          '12. Theorems About Differentiable Functions'
        ]
      },
      {
        number: '3.0',
        title: 'Differentiation Rules',
        lessons: [
          '1. Powers and Polynomials',
          '2. The Exponential Functions',
          '3. The Product and Quotient Rules',
          '4. The Chain Rule',
          '5. Trigonometric Functions',
          '6. The Chain Rule and Inverse Functions',
          '7. Implicit Functions',
          '8. Hyperbolic Functions',
          '9. Linear Approximation and the Derivative',
          '10. Theorems About Differentiable Functions'
        ]
      }
    ]
  },
  {
    id: 'calculus2',
    title: 'Calculus 2',
    description: 'Integration techniques, improper integrals, sequences, series, and convergence tests.',
    path: '/calculus2/',
    chapters: [
      {
        number: '7.0',
        title: 'Integration Techniques',
        lessons: [
          '1. Integration by Substitution',
          '2. Integration by Parts',
          '3. Tables of Integrals',
          '4. Algebraic Identities and Trigonometric Substitutions',
          '5. Numerical Methods for Definite Integrals',
          '6. Improper Integrals',
          '7. Comparison of Improper Integrals'
        ]
      }
    ]
  },
  {
    id: 'calculus3',
    title: 'Calculus 3',
    description: 'Vectors, 3D functions, partial derivatives, multiple integrals, and vector calculus.',
    path: '/calculus3/',
    chapters: [
      {
        number: '11.0',
        title: 'Vectors and the Geometry of Space',
        lessons: [
          '1. An Introduction to Vectors',
          '2. Vectors in 3D Coordinate System',
          '3. Using the Dot Product',
          '4. The Cross Product',
          '5. Lines and Planes in 3D',
          '6. Cylinders and Surfaces in 3D',
          '7. Using Cylindrical and Spherical Coordinates'
        ]
      }
    ]
  },
  {
    id: 'linearalg',
    title: 'Linear Algebra',
    description: 'Matrices, vector spaces, linear transformations, determinants, and eigenvectors.',
    path: '/linearalg/',
    chapters: [
      {
        number: '1.0',
        title: 'Systems of Linear Equations',
        lessons: [
          '1. Systems of Linear Equations',
          '2. Row Reduction and Echelon Forms',
          '3. Vector Equations',
          '4. The Matrix Equation',
          '5. Solution Sets of Linear Systems',
          '6. Applications of Linear Systems',
          '7. Linear Independence',
          '8. Introduction to Linear Transformations',
          '9. The Matrix of a Linear Transformation'
        ]
      }
    ]
  },
  {
    id: 'diffeq',
    title: 'Differential Equations',
    description: 'First and second order ODEs, Laplace transforms, systems of ODEs, and series solutions.',
    path: '/diffeq/',
    chapters: [
      {
        number: '1.0',
        title: 'First Order Differential Equations',
        lessons: [
          '1. Classification of Differential Equations',
          '2. Linear Differential Equations',
          '3. Separable Differential Equations',
          '4. Modeling with First Order Differential Equations'
        ]
      }
    ]
  }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'subject' | 'lesson'>('home');
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [selectedLessonMdKey, setSelectedLessonMdKey] = useState<string>('');
  const [currentPath, setCurrentPath] = useState<string>('/');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    
    if (path === '/') {
      handleBackToHome();
    } else {
      // Find subject by path
      const subject = SUBJECTS.find(s => `/${s.id}/` === path);
      if (subject) {
        handleSubjectClick(subject);
      }
    }
  };

  const handleSubjectClick = (subject: any) => {
    setSelectedSubject(subject);
    setCurrentView('subject');
    setCurrentPath(`/${subject.id}/`);
    window.scrollTo(0, 0);
  };

  const handleLessonClick = (mdKey: string) => {
    setSelectedLessonMdKey(mdKey);
    setCurrentView('lesson');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedSubject(null);
    setSelectedLessonMdKey('');
    setCurrentPath('/');
    window.scrollTo(0, 0);
  };

  const handleBackToSubject = () => {
    setCurrentView('subject');
    setSelectedLessonMdKey('');
    window.scrollTo(0, 0);
  };

  // Home Page
  if (currentView === 'home') {
    return (
      <div className="app-shell">
        <div className="grid-bg"></div>
        <Header currentPath={currentPath} onNavigate={handleNavigate} />
        
        <main>
          <div className="content-wrapper">
            <HomePage 
              subjects={SUBJECTS}
              onSubjectClick={handleSubjectClick}
            />
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Subject Page
  if (currentView === 'subject' && selectedSubject) {
    return (
      <div className="app-shell">
        <div className="grid-bg"></div>
        <Header currentPath={currentPath} onNavigate={handleNavigate} />
        
        <main>
          <div className="content-wrapper">
            <SubjectPage
              subject={selectedSubject}
              onLessonClick={handleLessonClick}
            />
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  if (currentView === 'lesson' && selectedSubject && selectedLessonMdKey) {
    return (
      <div className="app-shell">
        <div className="grid-bg"></div>
        <Header currentPath={currentPath} onNavigate={handleNavigate} />

        <main>
          <div className="content-wrapper">
            <LessonPage
              subjectId={selectedSubject.id}
              mdKey={selectedLessonMdKey}
              onBackToSubject={handleBackToSubject}
            />
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return null;
};

export default App;
