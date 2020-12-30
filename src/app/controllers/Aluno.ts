import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('api/v1')
export class AlunoController {
  @Get('alunos')
  public getAlunos(_: Request, res: Response): void {
    res.status(200).json({ message: 'hello' });
  }
}
