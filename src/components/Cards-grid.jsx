import React from 'react';
//  Components
import Logo from '../components/Logo';
// Assets
import '../assets/styles/components/Cards-grid.scss';

const CardsGrid = ({ children }) => {
  return (
    <main
      style={children.length === 0 ? { display: 'flex' } : null}
      className='cards-grid'
    >
      {children.length === 0 ? <Logo width='4' /> : ''}

      {children}
    </main>
  );
};

export default CardsGrid;
