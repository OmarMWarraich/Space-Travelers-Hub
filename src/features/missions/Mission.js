import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
/* eslint-disable-next-line */
import styles from './Mission.module.css';

const Mission = ({ mission }) => {
  const {
    id, name, description,
  } = mission;

  const [member, setMember] = useState('NOT A MEMBER');
  const [join, setJoin] = useState('Join Mission');
  const [badgeClass, setBadgeClass] = useState('secondary');
  const [buttonClass, setButtonClass] = useState('outline-secondary');

  const joinToggle = () => {
    setMember(member === 'NOT A MEMBER' ? 'Active Member' : 'NOT A MEMBER');
    setJoin(join === 'Join Mission' ? 'Leave Mission' : 'Join Mission');
    setBadgeClass(member === 'NOT A MEMBER' ? 'primary' : 'secondary');
    setButtonClass(join === 'Leave Mission' ? 'outline-secondary' : 'outline-danger');
  };

  return (
    <tr>
      <td className="col-2">{name}</td>
      <td className="col-6">{description}</td>
      <td className="col-2"><Badge className="my-auto" bg={badgeClass}>{member}</Badge></td>
      <td className="col-2"><Button onClick={joinToggle} id={id} variant={buttonClass}>{join}</Button></td>
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
