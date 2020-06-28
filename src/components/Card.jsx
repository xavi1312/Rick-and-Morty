import React from "react";
import "../assets/styles/components/Card.scss";

const Card = props => {
  const customProps = {
    id: 361,
    name: "Toxic Rick",
    status: "Dead",
    species: "Humanoid",
    type: "Rick's Toxic Side",
    gender: "Male",
    origin: {
      name: "Alien Spa",
      url: "https://rickandmortyapi.com/api/location/64",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/27"],
    url: "https://rickandmortyapi.com/api/character/361",
    created: "2018-01-10T18:20:41.703Z",
  };
  const { image, name, status, species, origin, location } = customProps;

  return (
    <article className="card">
      <div className="card__header">
        <img className="card__image" src={image} alt={name} />
      </div>
      <div className="card__body">
        <div>
          <h1 className="card__title">{name}</h1>
          <section className="card__status">
            <div
              className={`card__status-icon card__status-icon--${status.toLowerCase()}`}
            ></div>
            {status + " - " + species}
          </section>
          <p className="card__last-location">
            <span className="card__subtitle">
              Ultima localizacion conocida:
            </span>
            {location.name}
          </p>
          <p className="card__first-seen">
            <span className="card__subtitle">Primera aparicion:</span>
            {origin.name}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
