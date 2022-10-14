import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { cancelRocket } from '../rockets/rocketsSlice';
import { leaveMission } from '../missions/missionsSlice';
import styles from './MyProfile.module.css';

const MyProfile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const rocketsReserved = rocketsList.filter((rocket) => rocket.reserved);
  const missionsList = useSelector((state) => state.missions);
  const missionsReserved = missionsList.filter((mission) => mission.reserved);

  const dispatch = useDispatch();

  const cancelMissions = (e) => {
    dispatch(leaveMission(e.target.id));
  };

  const cancelRockets = (e) => {
    dispatch(cancelRocket(+e.target.id));
  };

  return (
    <>
      <div className={styles.myProfile}>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className={styles.cardTitle}>My Missions</h1>
              <hr />
              {(missionsReserved.length === 0) ? (
                <>
                  <p className="card-text">No Missions Joined</p>
                  <hr />
                </>
              ) : (
                missionsReserved.map((mission) => (
                  <>
                    <div className={styles.description}>
                      <h2 className="card-text">{mission.name}</h2>
                      <a href={mission.wiki} className="card-link">
                        Read More......
                      </a>
                      <Button onClick={cancelMissions} id={mission.id} variant="outline-secondary">
                        Cancel
                      </Button>
                    </div>
                    <hr />
                  </>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className={styles.cardTitle}>My Rockets</h1>
              <hr />
              {rocketsReserved.length === 0 ? (
                <>
                  <p className="card-text">No Rockets Joined</p>
                  <hr />
                </>
              ) : (
                rocketsReserved.map((rocket) => (
                  <>
                    <div className={styles.description}>
                      <h2 className="card-text">{rocket.name}</h2>
                      <a href={rocket.wiki} className="card-link">
                        Read More......
                      </a>
                      <Button onClick={cancelRockets} id={rocket.id} variant="outline-secondary">
                        Cancel
                      </Button>
                    </div>
                    <hr />
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
