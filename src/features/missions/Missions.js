import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { fetchMissionsAsync } from './missionsSlice';
import Mission from './Mission';
import styles from './Mission.module.css';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsAsync());
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  const missionsList = useSelector((state) => state.missions);
  /* console.log(missionsList); */

  return (
    <div className={styles.container}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
