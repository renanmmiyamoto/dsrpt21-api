import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../../errors/AppError';
import UserModel, { IUser } from '../user/UserModel';
import authConfig from '../../config/auth';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: IUser;
  token: string;
}

class SessionService {
  public async authenticateUser({
    email,
    password,
  }: Request): Promise<Response> {
    const user = await UserModel.findOne({ email });

    if (!user) throw new AppError('Incorrect email/password combination.', 401);

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched)
      throw new AppError('Incorrect email/password combination.', 401);

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default SessionService;
