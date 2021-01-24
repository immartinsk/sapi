import express from 'express';
import ArtistsRoute from './routes/artists';
import UserRoute from './routes/user';
import { spotifyApi } from './lib/spotifyApi';

const app = express();
const port = 8080;

app.use('/artist', ArtistsRoute);
app.use('/user', UserRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/me', async (req, res) => {
  // spotifyApi
  //   .getNewReleases({ limit: 5, offset: 0, country: 'NL' })
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((error) => {
  //     res.json({ error: error.message });
  //   });
  // spotifyApi.getMe().then(
  //   function (data) {
  //     console.log('Some information about the authenticated user', data.body);
  //   },
  //   function (err) {
  //     console.log('Something went wrong!', err);
  //   }
  // );

  const getInfoAboutUser = await spotifyApi.getMe();
  const getUsername = getInfoAboutUser.body.uri.split(':')[2];
  const getUsersPlaylists = await spotifyApi.getUserPlaylists(getUsername);
  console.log(getNewReleases);
  res.json({
    user: getInfoAboutUser,
    userPlaylists: getUsersPlaylists['body']['items'],
  });
});

app.get('/playlist/:username', async (req, res) => {
  const { username } = req.params;
  const getUsersPlaylists = await spotifyApi.getUserPlaylists(username);
  const getPlaylistId = getUsersPlaylists['body']['items'][0].id;
  const getUserPlaylist = await spotifyApi.getPlaylist(getPlaylistId);
  console.log(getUsersPlaylists.body.items);
  res.json({
    getUsersPlaylists,
  });
});

app.listen(port, console.log('Server started on port', port));
