import { Router } from 'express';

import usersRouter from './users.routes';
import hospitalRouter from './hospitals.routes';
import sessionRouter from './session.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/hospitals', hospitalRouter);
routes.use('/session', sessionRouter);

export default routes;
