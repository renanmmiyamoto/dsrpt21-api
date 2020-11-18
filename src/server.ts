import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv-safe';

import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server running on port 3333');
});
