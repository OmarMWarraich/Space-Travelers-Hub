import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAsync } from './rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);

  console.log(rockets);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketsAsync());
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div>
      <h1>Rockets</h1>
    </div>
  );
};

export default Rockets;
