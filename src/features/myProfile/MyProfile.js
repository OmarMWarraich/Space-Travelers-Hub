import React from 'react';
import { useSelector } from 'react-redux';
import styles from './MyProfile.module.css';
import Card from './Card';

const MyProfile = () => {
  const RocketsList = useSelector((state) => state.rockets);
  const MissionsList = useSelector((state) => state.missions);

  return (
    <>
      <div className={styles.myProfile}>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Missions</h5>
              <hr />
              {MissionsList.filter((mission) => mission.reserved).map((mission) => (
                <Card key={mission.id} name={mission.name} />))}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Rockets</h5>
              <hr />
              {RocketsList.filter((rocket) => rocket.reserved).map((rocket) => (
                <Card key={rocket.id} name={rocket.name} />))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
