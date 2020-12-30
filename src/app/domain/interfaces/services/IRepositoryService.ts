import { Request, Response } from 'express';
import { IResponseJson } from '@src/app/domain/interfaces/express/response/IResponseJson';

export interface IRepositoryService {
  listar(req: Request, res: Response): Promise<IResponseJson>;
  salvar(req: Request, res: Response): Promise<IResponseJson>;
}
