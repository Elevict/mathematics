import React from 'react';
import Hero from '../../ui/Hero/Hero';
import Grid from '../../ui/Grid/Grid';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';

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

interface HomePageProps {
  subjects: SubjectWithChapters[];
  onSubjectClick: (subject: SubjectWithChapters) => void;
}

const HomePage: React.FC<HomePageProps> = ({ subjects, onSubjectClick }) => {
  return (
    <div className="home-page">
      <Hero 
        title="Elevict's Mathematics"
        subtitle="Comprehensive mathematics education from algebra to advanced calculus"
        size="large"
      />
      <Grid 
        columns={3}
        width="1200px"
        gap="2rem"
        className="subjects-grid"
      >
        {subjects.map((subject) => (
          <Card
            key={subject.id}
            title={subject.title}
            description={subject.description}
          >
            <Button
              onClick={() => onSubjectClick(subject)}
              variant="primary"
              size="medium"
              className="card-button"
            >
              Explore {subject.title}
            </Button>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
