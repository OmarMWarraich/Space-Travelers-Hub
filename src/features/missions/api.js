import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const response = await axios.get(API_URL);
  const missions = response.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));

  return missions;
};

export default fetchMissions;
