import React, { useEffect } from 'react';
// Utilities
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';
// Components
import Hero from '../components/Hero';
import CardsGridController from '../components/Cards-grid-controller';
import CardsGrid from '../components/Cards-grid';
import Card from '../components/Card';
// Assets
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';

const Home = props => {
  const { characters, isLoading, fetchCharacters } = props;
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Hero />
      <CardsGridController customClass='controllers-container--top' />
      <CardsGrid>
        {isLoading ? <h2>Loading... </h2> : ''}
        {characters.map(card => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            status={card.status}
            species={card.species}
            origin={card.origin}
            location={card.location}
          />
        ))}
      </CardsGrid>
      {characters.length > 6 ? (
        <CardsGridController customClass='controllers-container--bottom' />
      ) : (
        ''
      )}
    </>
  );
};

const mapStateToProps = ({ characters, isLoading }) => {
  return {
    characters,
    isLoading,
  };
};

const mapDispatchtoProps = {
  fetchCharacters,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
