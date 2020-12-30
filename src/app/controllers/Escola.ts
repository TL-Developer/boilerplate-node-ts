import { Request } from 'express';
import { IRepositoryService } from '@src/app/domain/interfaces/services/IRepositoryService';
import { CRIADO, OK, REQUEST_INCORRETO } from '@src/app/helpers/statusCode';
import { IResponseJson } from '@src/app/domain/interfaces/express/response/IResponseJson';
import { responseJson } from '@src/app/helpers/factory';
import { LOGIN_JA_EXISTE } from '@src/app/helpers/messages';
import { Controller, Get, Post } from '@overnightjs/core';
import Escola from '@src/app/models/Escola';

@Controller('api/v1/escolas')
export class EscolaController implements IRepositoryService {
  @Get('')
  public async listar(_: Request, res: IResponseJson): Promise<IResponseJson> {
    try {
      const escolas = await Escola.find();

      return res.status(OK).json({
        ...responseJson(),
        result: escolas,
      });
    } catch (error) {
      return res.status(REQUEST_INCORRETO).json({
        ...responseJson(),
        error,
        success: false,
      });
    }
  }

  @Post('')
  public async salvar(
    req: Request,
    res:IResponseJson,
  ): Promise<IResponseJson> {
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
