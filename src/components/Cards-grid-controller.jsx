import React from 'react';
//  Utilities
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Assets
import '../assets/styles/components/Cards-grid-controller.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CardsGridController = ({ customClass = '' }) => {
  return (
    <div className={`controllers-container ${customClass}`}>
      <section className='controllers'>
        <button className='btn btn--prev'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <input type='text' className='searchBox' placeholder='🔍' />
        <button className='btn btn--next'>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
    </div>
  );
};

export default CardsGridController;
