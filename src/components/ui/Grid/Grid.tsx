import React from 'react';
import './Grid.css';

interface GridProps {
  children: React.ReactNode;
  columns?: number | 'auto-fit' | 'auto-fill';
  columnSizes?: number[];
  minColumnWidth?: string;
  width?: string;
  gap?: string;
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  columns = 'auto-fit',
  columnSizes,
  width,
  minColumnWidth = '320px',
  gap = '1.8rem',
  className = '',
}) => {
  const gridStyle: React.CSSProperties = {
    gap,
  };

  let gridClass = 'grid';
  
  // Handle column size ratios
  if (columnSizes && columnSizes.length > 0) {
    const totalParts = columnSizes.reduce((sum, size) => sum + size, 0);
    const gridTemplateColumns = columnSizes.map(size => `${(size / totalParts) * 100}%`).join(' ');
    gridStyle.gridTemplateColumns = gridTemplateColumns;
  } else if (columns === 'auto-fit' || columns === 'auto-fill') {
    gridClass += ` grid--${columns}`;
    gridStyle.gridTemplateColumns = `repeat(${columns}, minmax(${minColumnWidth}, 1fr))`;
  } else if (typeof columns === 'number') {
    gridStyle.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }

  // Add width if specified
  if (width) {
    gridStyle.width = width;
  }

  return (
    <div 
      className={`${gridClass} ${className}`.trim()}
      style={gridStyle}
    >
      {children}
    </div>
  );
};

export default Grid;
