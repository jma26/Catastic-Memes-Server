import express from 'express';
import dotenv from 'dotenv/config';
import catRoutes from './routes/catRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running smoothly!' });
});

app.use('/api', catRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})