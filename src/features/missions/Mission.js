import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from './missionsSlice';

const Mission = ({ mission }) => {
  const {
    id, name, description, reserved,
  } = mission;

  const dispatch = useDispatch();

  const handleBooking = (e) => {
    if (reserved) {
      dispatch(leaveMission(e.target.id));
    } else {
      dispatch(joinMission(e.target.id));
    }
  };

  return (
    <tr className={reserved ? 'table-secondary' : 'table-light'}>
      <td className="col-2">{name}</td>
      <td className="col-6">{description}</td>
      <td className="col-2">
        <Badge className="my-auto" bg={reserved ? 'success' : 'danger'}>
          {reserved ? 'Member' : 'Not A Member'}
        </Badge>
      </td>
      <td className="col-2">
        <Button onClick={handleBooking} id={id} variant={reserved ? 'outline-success success' : 'outline-danger danger'}>
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
