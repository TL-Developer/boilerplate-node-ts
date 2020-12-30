import express, { Application } from 'express';
import { Server } from '@overnightjs/core';
// eslint-disable-next-line import/no-unresolved
import './utils/module-alias';
import { AlunoController } from './app/controllers/Aluno';

export class SetupServer extends Server {
  constructor(
    private port = 5190,
  ) {
    super();
    this.init();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    const alunoController = new AlunoController();

    this.addControllers([
      alunoController,
    ]);
  }

  public getApp(): Application {
    return this.app;
  }
}
