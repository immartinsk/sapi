import express from 'express';
import ArtistsRoute from './routes/artists';

const app = express();
const port = 3000;

app.use('/artist', ArtistsRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, console.log('Server started on port', port));
