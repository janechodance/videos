import axios from 'axios'
const KEY = 'AIzaSyCHAcTqR3Yp7ic5S1vhCoVUJbQgdmWtAZs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});