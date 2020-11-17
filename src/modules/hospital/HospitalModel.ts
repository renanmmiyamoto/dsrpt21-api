import { model, Schema, Document } from 'mongoose';

export interface IHospital extends Document {
  name: string;
  address: string;
  cep: string;
  distance: string;
}

const HospitalSchema = new Schema({
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

export default model<IHospital>('Hospital', HospitalSchema);
