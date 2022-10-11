import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const response = await axios.get(API_URL);
  const data = await response.data;

  const missions = Object.keys(data).map((key) => ({
    mission_id: data[key].mission_id,
    mission_name: data[key].mission_id,
    description: data[key].description,
  }));
  return missions;
};

export default fetchMissions;
