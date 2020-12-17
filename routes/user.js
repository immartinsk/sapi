import express from 'express';
const router = express.Router();
import { searchForUser, getUsersPlaylists } from '../controllers/Users';

router.get('/:user', searchForUser);
router.get('/:user/playlists', getUsersPlaylists);

export default router;
