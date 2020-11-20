import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv-safe';

import routes from './routes';
import AppError from './errors/AppError';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).send({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);
  return res.status(500).send({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server running on port 3333');
});
