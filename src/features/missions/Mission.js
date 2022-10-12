import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
/* eslint-disable-next-line */
import styles from './Mission.module.css';

const Mission = ({ mission }) => {
  const {
    id, name, description,
  } = mission;

  console.log(id);

  return (
    <tr>
      <td className="col-2">{name}</td>
      <td className="col-6">{description}</td>
      <td className="col-2"><Badge className="my-auto" bg="primary">Active Member</Badge></td>
      <td className="col-2"><Button variant="outline-secondary">Join Mission</Button></td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
