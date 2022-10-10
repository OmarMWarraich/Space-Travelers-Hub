import React from 'react';
import styles from './MyProfile.module.css';

const MyProfile = () => (
  <>
    <div className={styles.myProfile}>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">My Profile</h5>
            <hr />
            <p className="card-text">Name: </p>
            <hr />
            <p className="card-text">Email: </p>
            <hr />
            <p className="card-text">Phone: </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">My Profile</h5>
            <hr />
            <p className="card-text">Name: </p>
            <hr />
            <p className="card-text">Email: </p>
            <hr />
            <p className="card-text">Phone: </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default MyProfile;
