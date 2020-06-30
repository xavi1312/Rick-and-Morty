import React, { useEffect } from 'react';
// Utilities
import { connect } from 'react-redux';
import { moreCharacters } from '../actions';
import { getCharacters } from '../utils/rickAndMortyAPI';
import { store } from '../index';
// Components
import Hero from '../components/Hero';
import CardsGridController from '../components/Cards-grid-controller';
import CardsGrid from '../components/Cards-grid';
import Card from '../components/Card';
// Assets
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';

const Home = ({ characters, page }) => {
  useEffect(() => {
    getCharacters(store.dispatch, moreCharacters, page);
  }, []);

  return (
    <div>
      <Hero />
      <CardsGridController customClass='controllers-container--top' />
      <CardsGrid>
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
      <CardsGridController customClass='controllers-container--bottom' />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
    page: state.page,
  };
};

export default connect(mapStateToProps, null)(Home);
