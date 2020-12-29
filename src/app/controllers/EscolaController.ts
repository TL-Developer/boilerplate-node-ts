import { Request } from 'express';
import { IRepositoryService } from '../domain/interfaces/services/IRepositoryService';
import Escola from '../infra/db/mongodb/schemas/Escola';
import { CRIADO, OK, REQUEST_INCORRETO } from '../helpers/statusCode';
import { IResponseJson } from '../domain/interfaces/express/response/IResponseJson';
import { responseJson } from '../helpers/factory';
import { LOGIN_JA_EXISTE } from '../helpers/messages';

class EscolaController implements IRepositoryService {
  public async get(req: Request, res: IResponseJson): Promise<IResponseJson> {
    const escolas = await Escola.find();

    return res.status(OK).json({
      ...responseJson(),
      result: escolas,
    });
  }

  public async create(req: Request, res: IResponseJson): Promise<IResponseJson> {
    try {
      const escola = await Escola.create(req.body);

      return res.status(CRIADO).json(responseJson(escola));
    } catch (error) {
      if (error.code === 11000) {
        return res.status(REQUEST_INCORRETO).json({
          ...responseJson(),
          error,
          message: LOGIN_JA_EXISTE,
          success: false,
        });
      }

      return res.status(REQUEST_INCORRETO);
    }
  }
}

export default new EscolaController();
