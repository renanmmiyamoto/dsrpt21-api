import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';

dotenv.config();

// @ts-ignore
mongoose.connect(
  'mongodb+srv://admin:medness123@cluster0.7tjsj.mongodb.net/DSRPT21?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
);
mongoose.Promise = global.Promise;

export default mongoose;
