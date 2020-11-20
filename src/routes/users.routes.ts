import { Router } from 'express';

import UserModel from '../modules/user/UserModel';
import UserService from '../modules/user/UserService';

const usersRouter = Router();

const userService = new UserService();

usersRouter.get('/', async (req, res) => {
  const users = await UserModel.find();

  return res.send(users);
});

usersRouter.get('/:userId', async (req, res) => {
  const user = await userService.getUser(req.params.userId);

  return res.send(user);
});

usersRouter.post('/', async (req, res) => {
  const user = await userService.createUser(req.body);

  return res.send(user);
});

usersRouter.delete('/:userId', async (req, res) => {
  const user = await userService.deleteUser(req.params.userId);

  return res.send(user);
});

export default usersRouter;
