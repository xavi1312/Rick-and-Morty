import React, { useEffect } from 'react';
//  Components
import Spinner from '../components/Spinner';
//  Utilities
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchCharacters } from '../actions';
import { connect } from 'react-redux';
// Assets
import '../assets/styles/components/Cards-grid-controller.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { composeURLwithName } from '../api/characters';

const CardsGridController = ({
  customClass = '',
  prev,
  next,
  fetchCharacters,
  isLoading,
}) => {
  const spinnerStyles = {
    fontSize: '2px',
  };

  const handleClickPrev = () => {
    if (prev != null) fetchCharacters(prev);
  };
  const handleClickNext = () => {
    if (next != null) fetchCharacters(next);
  };
  const handleChangeSearchBox = event => {
    const searchValue = event.target.value;
    const url = composeURLwithName(searchValue);
    fetchCharacters(url);
  };

  return (
    <div className={`controllers-container ${customClass}`}>
      <section className='controllers'>
        <button
          className='btn btn--prev'
          onClick={() => handleClickPrev()}
          disabled={prev === null}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <input
          type='text'
          className='searchBox'
          placeholder='🔍'
          onChange={handleChangeSearchBox}
        />
        <button
          className='btn btn--next'
          onClick={() => handleClickNext()}
          disabled={next === null}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        {isLoading ? <Spinner styles={spinnerStyles} /> : ''}
      </section>
    </div>
  );
};

const mapStateToProps = ({ prev, isLoading, next }) => {
  return {
    prev,
    isLoading,
    next,
  };
};

const mapDispatchToProps = {
  fetchCharacters,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsGridController);
