import './utils/module-alias';
import express, { Application } from 'express';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { AlunoController } from '@src/app/controllers/Aluno';
import { EscolaController } from '@src/app/controllers/Escola';
import * as database from '@src/database';

export class SetupServer extends Server {
  private port = 5190;

  constructor(port: number) {
    super();

    this.port = port;
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
    this.databaseSetup();

    this.app.listen(this.port, () => {
      Logger.Imp(`Server listening on port: ${this.port}`);
    });
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    this.addControllers([
      new AlunoController(),
      new EscolaController(),
    ]);
  }

  public getApp(): Application {
    return this.app;
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  public async close(): Promise<void> {
    await database.close();
  }
}

const server = new SetupServer(5190);

server.init();
