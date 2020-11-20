import { Router } from 'express';

import SessionService from '../modules/sessions/SessionService';

const sessionRouter = Router();

sessionRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const sessionService = new SessionService();

  const { user, token } = await sessionService.authenticateUser({
    email,
    password,
  });

  // @ts-ignore
  user.password = undefined;

  return res.send({ user, token });
});

export default sessionRouter;
