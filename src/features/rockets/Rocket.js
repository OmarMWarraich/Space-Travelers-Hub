import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { cancelRocket, reserveRocket } from './rocketsSlice';
import styles from './Rocket.module.css';

const Rocket = ({ rocket }) => {
  /* eslint-disable-next-line no-unused-vars */
  const {
    id, name, description, image, reserved,
  } = rocket;

  const dispatch = useDispatch();

  const handleReservation = (e) => {
    if (!reserved) {
      dispatch(reserveRocket(+e.target.id));
    } else {
      dispatch(cancelRocket(+e.target.id));
    }
  };

  return (
    <Card className="m-5">
      <div className={styles.card}>
        <Card.Img src={image} style={{ width: '22rem', height: '18rem' }} />
        <div className={styles.cardbody}>
          <Card.Body>
            <Card.Title className="fs-3 mt-0">{name}</Card.Title>
            <Card.Text className="fs-4 mt-2 mb-2">{description}</Card.Text>
            <Button
              variant="primary"
              className="p-3 mt-2"
              id={id}
              style={{ width: '12rem' }}
              onClick={handleReservation}
            >
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Rocket;
