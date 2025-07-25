import express from 'express';
import { getCatImage } from '../controllers/catController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello ~ Welcome to Ma API Server!');
})

router.get('/cat-image', getCatImage);

export default router;