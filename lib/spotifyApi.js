import SpotifyApi from 'spotify-web-api-node';
require('dotenv').config();
export const spotifyApi = new SpotifyApi();

spotifyApi.setCredentials({
  accessToken: process.env.API_TOKEN,
  refreshToken: process.env.REFRESH_TOKEN,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
