import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const response = await axios.get(API_URL);
  const data = await response.data;
  const rockets = Object.keys(data).map((key) => ({
    id: data[key].rocket_id,
    name: data[key].rocket_name,
    description: data[key].description,
    image: data[key].flickr_images[0],
  }));
  return rockets;
};

export default fetchRockets;
