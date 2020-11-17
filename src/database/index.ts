import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';

dotenv.config();

export default function connect(): Promise<typeof mongoose> {
  // @ts-ignore
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}
