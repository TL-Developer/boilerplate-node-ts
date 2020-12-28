import { Router } from 'express';
import EscolaController from '../presentation/controllers/EscolaController';

const routes = Router();

routes.get('/escolas', EscolaController.get);

export default routes;
