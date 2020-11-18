import mongoose from '../../database';

export interface IHospital extends mongoose.Document {
  name: string;
  address: string;
  cep: string;
  distance: string;
}

const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    unique: true,
    required: true,
  },
  cep: {
    type: String,
    unique: true,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IHospital>('Hospital', HospitalSchema);
