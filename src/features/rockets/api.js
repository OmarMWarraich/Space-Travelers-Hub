import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const response = await axios.get(API_URL);
  const rockets = response.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
    wiki: rocket.wikipedia,
  }));
  return rockets;
};

export default fetchRockets;
