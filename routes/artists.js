import express from 'express';
import { searchForArtists, getArtistAlbums } from '../controllers/Artists';
const router = express.Router();

router.get('/:artist', searchForArtists);
router.get('/:artistId/albums', getArtistAlbums);

export default router;
