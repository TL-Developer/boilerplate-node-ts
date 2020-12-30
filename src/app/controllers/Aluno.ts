import { Controller, Get, Post } from '@overnightjs/core';
import { Request } from 'express';
import { IRepositoryService } from '@src/app/domain/interfaces/services/IRepositoryService';
import { responseJson } from '@src/app/helpers/factory';
import { LOGIN_JA_EXISTE } from '@src/app/helpers/messages';
import { CRIADO, OK, REQUEST_INCORRETO } from '@src/app/helpers/statusCode';
import { IResponseJson } from '@src/app/domain/interfaces/express/response/IResponseJson';
import Aluno from '@src/app/models/Aluno';

@Controller('api/v1/alunos')
export class AlunoController implements IRepositoryService {
  @Get('')
  public async listar(_: Request, res: IResponseJson): Promise<IResponseJson> {
    try {
      const alunos = await Aluno.find();

      return res.status(OK).json({
        ...responseJson(),
        result: alunos,
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
      const escola = await Aluno.create(req.body);

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
