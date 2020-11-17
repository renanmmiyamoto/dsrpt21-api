import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv-safe';

import connect from './database';
import routes from './routes';

dotenv.config();

const app = express();

connect();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server running on port 3333');
});
