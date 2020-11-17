import { Router } from 'express';

import HospitalModel from '../modules/hospital/HospitalModel';
import HospitalService from '../modules/hospital/HospitalService';

const hospitalsRouter = Router();

hospitalsRouter.get('/', async (req, res) => {
  try {
    const hospitals = await HospitalModel.find();

    return res.send(hospitals);
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
});

hospitalsRouter.get('/:hospitalId', async (req, res) => {
  try {
    const hospitalService = new HospitalService();

    const hospital = await hospitalService.getHospital(req.params.hospitalId);

    return res.send(hospital);
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
});

hospitalsRouter.post('/', async (req, res) => {
  try {
    const hospitalService = new HospitalService();

    const hospital = await hospitalService.createHospital(req.body);

    return res.send(hospital);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

hospitalsRouter.delete('/:hospitalId', async (req, res) => {
  try {
    const hospitalService = new HospitalService();

    const hospital = await hospitalService.deleteHospital(req.body);

    return res.send(hospital);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

export default hospitalsRouter;
