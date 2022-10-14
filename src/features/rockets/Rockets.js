import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAsync } from './rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();

  const RocketsList = useSelector((state) => state.rockets);

  useEffect(() => {
    if (RocketsList.length === 0) {
      dispatch(fetchRocketsAsync());
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      <div>
        {RocketsList.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </>
  );
};

export default Rockets;
