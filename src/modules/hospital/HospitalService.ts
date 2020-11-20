import AppError from '../../errors/AppError';
import HospitalModel, { IHospital } from './HospitalModel';

interface Request {
  name: string;
  address: string;
  cep: string;
  distance: string;
}

class HospitalService {
  public async getHospital(hospitalId: string): Promise<IHospital> {
    if (!hospitalId) throw new AppError('Missing hospital id.');

    const hospital = await HospitalModel.findOne({ _id: hospitalId });

    if (!hospital) throw new AppError('Hospital not found.');

    return hospital;
  }

  public async createHospital(hospital: Request): Promise<IHospital> {
    for (let i = 0; i < Object.keys(hospital).length; i++) {
      if (!Object.keys(hospital)[i]) throw new AppError('All fields are required.');
    }

    const { name, address, cep, distance } = hospital;

    const hospitalExists = await HospitalModel.findOne({ name });

    if (hospitalExists) throw new AppError('Hospital already exists.');

    const newHospital = await HospitalModel.create({
      name,
      address,
      cep,
      distance,
    });

    return newHospital;
  }

  public async deleteHospital(hospitalId: string): Promise<IHospital> {
    if (!hospitalId) throw new AppError('Missing hospital id.');

    const hospital = await HospitalModel.findOneAndDelete({ _id: hospitalId });

    if (!hospital) throw new AppError('Hospital not found.');

    return hospital;
  }
}

export default HospitalService;
