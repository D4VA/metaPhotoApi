import express from 'express';
import { searchTitleData, getCombinedDataById } from '../controllers/combinedController.js';
import allowCors from './allowCors.js';

const router = express.Router();

router.get('/photos', allowCors(searchTitleData));
router.get('/photos/:id', allowCors(getCombinedDataById));

export default router;