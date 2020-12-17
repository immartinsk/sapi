import { spotifyApi } from '../lib/spotifyApi';

export const searchForUser = (req, res) => {
  const { user } = req.params;
  spotifyApi.getUser(`${user}`).then((data) => {
    res.json(data);
  });
};

export const getUsersPlaylists = (req, res) => {
  const { user } = req.params;
  spotifyApi.getUserPlaylists(`${user}`).then((data) => {
    res.json(data);
  });
};
