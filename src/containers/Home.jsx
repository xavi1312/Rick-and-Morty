import React, { useEffect } from 'react';
// Utilities
import { connect } from 'react-redux';
import { moreCharacters } from '../actions';
// Components
import Hero from '../components/Hero';
import CardsGrid from '../components/Cards-grid';
import Card from '../components/Card';
// Assets
import '../assets/styles/App.scss';

const Home = props => {
  useEffect(() => {
    props.moreCharacters({});
  }, [props]);

  return (
    <div>
      <Hero />
      <CardsGrid>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsGrid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
  };
};
const mapDispatchToProps = {
  moreCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
