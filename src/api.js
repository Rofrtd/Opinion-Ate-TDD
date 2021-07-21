import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/Y1Qv0FBfn6VwzCjhJe7kTrlZay9FAtWr',
});
const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
