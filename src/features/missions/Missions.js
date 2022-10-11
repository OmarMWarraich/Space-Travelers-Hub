import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsAsync } from './missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsAsync());
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  const missionsList = useSelector((state) => state.missions);
  console.log(missionsList);

  return (
    <div>Missions</div>
  );
};

export default Missions;
