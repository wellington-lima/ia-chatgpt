import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));