import express from 'express';
import dotenv from 'dotenv/config';
import { rateLimit } from 'express-rate-limit'
import catRoutes from './routes/catRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running smoothly!' });
});

app.use('/api', limiter, catRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})