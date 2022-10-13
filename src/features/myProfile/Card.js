import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name }) => (

  <>
    <p className="card-text">{name}</p>
    <hr />
  </>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
