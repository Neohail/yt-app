import axios from 'axios';

const KEY='AIzaSyAFjIBcSSjj9Bdt7YO-LIGw1aH3dD9OzQw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});