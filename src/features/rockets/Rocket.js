import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Card, Badge } from 'react-bootstrap';
import { cancelRocket, reserveRocket } from './rocketsSlice';
import styles from './Rocket.module.css';

const Rocket = ({ rocket }) => {
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
    <>
      <div className={styles.rocket}>
        <Card className="m-5">
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <Card.Img src={image} style={{ width: '22rem', height: '18rem' }} />
            </div>
            <div className={styles.cardbody}>
              <Card.Body>
                <Card.Title className="fs-3 mt-0">{name}</Card.Title>
                <Card.Text className="fs-5 mt-2 mb-2">
                  {!reserved ? '' : <Badge>Reserved</Badge>}
                  {' '}
                  {description}
                </Card.Text>
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
      </div>
    </>
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
