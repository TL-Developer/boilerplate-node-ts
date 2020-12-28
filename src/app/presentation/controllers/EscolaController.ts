import { Request, Response } from "express";
import Escola from '../../infra/db/mongodb/schemas/Escola';

class EscolaController {
  
  public async get(req: Request, res: Response): Promise<Response> {
    const escolas = await Escola.find();

    return res.status(200).json(escolas);
  }

  public async post(req: Request, res: Response) {
    const escola = await Escola.create(req.body);

    return res.status(201).json(escola);
  }
}

export default new EscolaController();
