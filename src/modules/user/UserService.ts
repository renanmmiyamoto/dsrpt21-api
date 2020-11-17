import AppError from '../../errors/AppError';
import UserModel, { IUser } from './UserModel';

interface Request {
  name: string;
  email: string;
  password: string;
}

class UserService {
  public async getUser(userId: string): Promise<IUser> {
    if (!userId) throw new AppError('Missing user id.');

    const user = await UserModel.findOne({ _id: userId });

    if (!user) throw new AppError('User not found.');

    return user;
  }

  public async createUser(user: Request): Promise<IUser> {
    if (!user.name || !user.email || !user.password)
      throw new AppError('All fields are required.');

    const { name, email, password } = user;

    const userExists = await UserModel.findOne({ email });

    if (userExists) throw new AppError('User already exists.');

    const newUser = await UserModel.create({ name, email, password });

    return newUser;
  }

  public async deleteUser(userId: string): Promise<IUser> {
    if (!userId) throw new AppError('Missing user id.');

    const user = await UserModel.findOneAndDelete({ _id: userId });

    if (!user) throw new AppError('User not found.');

    return user;
  }
}

export default UserService;
