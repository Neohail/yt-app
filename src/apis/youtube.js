import axios from 'axios';

const KEY='AIzaSyDVB1yOJswZLYLuWk_4anSrOCqh_Q6pj9o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});