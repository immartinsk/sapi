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

app.listen(port, console.log('Server started on port', port));
