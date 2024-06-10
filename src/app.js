import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Cambia esto por el puerto de tu aplicación de frontend
  methods: 'GET,POST,PUT,DELETE', // Ajusta los métodos permitidos según tu aplicación
  allowedHeaders: 'Content-Type,Authorization', // Ajusta los encabezados permitidos según tu aplicación
}));

app.use(express.json());
app.use('/api', routes);

export default app;