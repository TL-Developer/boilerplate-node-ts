import { Request, Response } from "express";
import { IResponseJson } from "../express/response/IResponseJson";

export interface IRepositoryService {
  get(req: Request, res: Response): Promise<IResponseJson>;
  create(req: Request, res: Response): Promise<IResponseJson>;
}
