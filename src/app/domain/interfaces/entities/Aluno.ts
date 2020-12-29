import { Document } from 'mongoose';
import { TResponsavel } from './Responsavel';
import { TTurma } from './Turma';

export type TAluno = {
  nome: string,
  foto: string,
  sexo: string,
  matricula: number,
  responsaveis: TResponsavel[],
  dataNascimento: Date,
  rg: string,
  cpf: string,
  observacoes: string,
  turma: TTurma,
};

export interface IAluno extends Document {
  nome: string,
  foto: string,
  sexo: string,
  matricula: number,
  responsaveis: TResponsavel[],
  dataNascimento: Date,
  rg: string,
  cpf: string,
  observacoes: string,
  turma: TTurma,
};

export default IAluno;
