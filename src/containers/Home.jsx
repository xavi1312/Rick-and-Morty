import React, { useEffect } from 'react';
// Utilities
import { connect } from 'react-redux';
import { moreCharacters } from '../actions';
import { getCharacters } from '../utils/rickAndMortyAPI';
import { store } from '../index';
// Components
import Hero from '../components/Hero';
import CardsGrid from '../components/Cards-grid';
import Card from '../components/Card';
// Assets
import '../assets/styles/App.scss';

const Home = ({ characters }) => {
  useEffect(() => {
    getCharacters(store.dispatch, moreCharacters);
  }, []);

  return (
    <div>
      <Hero />
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
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps, null)(Home);
