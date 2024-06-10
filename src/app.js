import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(cors());


app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running... esta api esta hecho por DAV4');
  });

app.use('/api', routes);

export default app;