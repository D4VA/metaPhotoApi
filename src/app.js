import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

// Configuración de CORS para permitir todas las solicitudes
app.use(cors());

app.use(express.json());
app.use('/api', routes);

export default app;