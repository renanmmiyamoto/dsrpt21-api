import { Router } from 'express';

import HospitalModel from '../modules/hospital/HospitalModel';
import HospitalService from '../modules/hospital/HospitalService';

const hospitalsRouter = Router();

hospitalsRouter.get('/', async (req, res) => {
  try {
    const hospitals = await HospitalModel.find();

    return res.json(hospitals);
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
});

hospitalsRouter.get('/:hospitalId', async (req, res) => {
  try {
    const hospitalService = new HospitalService();

    const hospital = await hospitalService.getHospital(req.params.hospitalId);

    return res.json(hospital);
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
});

hospitalsRouter.post('/', async (req, res) => {
  try {
    const hospitalService = new HospitalService();

    const hospital = await hospitalService.createHospital(req.body);

    return res.json(hospital);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

hospitalsRouter.delete('/:hospitalId', async (req, res) => {
  try {
    const hospitalService = new HospitalService();

    const hospital = await hospitalService.deleteHospital(req.body);

    return res.json(hospital);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default hospitalsRouter;
