import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('alunos')
export class AlunoController {
  @Get('')
  public getAlunos(_: Request, res: Response): void {
    res.status(200).json({ message: 'hello' });
  }
}
