import { spotifyApi } from '../lib/spotifyApi';

export const searchForArtists = (req, res) => {
  const { artist } = req.params;
  const artistResult = [];

  spotifyApi
    .searchArtists(`${artist}`)
    .then((data) => {
      const artistResults = data.body.artists.items;
      artistResults.map((a) => {
        artistResult.push({
          name: a.name,
          type: a.type,
          uri: a.uri,
          popularity: a.popularity,
          followers: a.followers.total,
          genres: a.genres,
          id: a.id,
          images: a.images,
        });
      });
      res.json(artistResult);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
};

export const getArtistAlbums = (req, res) => {
  const { artistId } = req.params;
  const artistAlbumResults = [];
  spotifyApi
    .getArtistAlbums(`${artistId}`)
    .then((data) => {
      const albumResults = data.body.items;
      albumResults.map((a) =>
        artistAlbumResults.push({
          name: a.name,
          release_data: a.release_date,
          tracks: a.total_tracks,
          uri: a.uri,
          id: a.id,
          group: a.album_group,
          type: a.album_type,
          artist: a.artists,
          market: a.available_markets,
          url: a.external_urls.spotify,
          images: a.images,
        })
      );
      res.json(artistAlbumResults);
    })
    .catch((error) => res.json({ error: error.message }));
};
