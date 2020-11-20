import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import HospitalModel from '../modules/hospital/HospitalModel';
import HospitalService from '../modules/hospital/HospitalService';

const hospitalsRouter = Router();

const hospitalService = new HospitalService();

hospitalsRouter.use(ensureAuthenticated);

hospitalsRouter.get('/', async (req, res) => {
  const hospitals = await HospitalModel.find();

  return res.send(hospitals);
});

hospitalsRouter.get('/:hospitalId', async (req, res) => {
  const hospital = await hospitalService.getHospital(req.params.hospitalId);

  return res.send(hospital);
});

hospitalsRouter.post('/', async (req, res) => {
  const hospital = await hospitalService.createHospital(req.body);

  return res.send(hospital);
});

hospitalsRouter.delete('/:hospitalId', async (req, res) => {
  const hospital = await hospitalService.deleteHospital(req.body);

  return res.send(hospital);
});

export default hospitalsRouter;
