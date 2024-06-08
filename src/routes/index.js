import express from 'express';
import { searchTitleData, getCombinedDataById } from '../controllers/combinedController.js';

const router = express.Router();

router.get('/photos', searchTitleData);
router.get('/photos/:id', getCombinedDataById);

export default router;