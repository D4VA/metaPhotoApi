import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import allowCors from './allowCors.js';

const app = express();

app.use(cors());

app.use(allowCors);

app.use(express.json());
app.use('/api', routes);

export default app;