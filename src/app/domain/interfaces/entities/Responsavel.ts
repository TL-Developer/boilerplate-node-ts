import { Document } from 'mongoose';
import { TAluno } from '@src/app/domain/interfaces/entities/Aluno';
import { TVinculo } from '@src/app/domain/interfaces/entities/Vinculo';

export type TResponsavel = {
  nome: string,
  vinculo: TVinculo,
  alunos: TAluno[],
  celular: string,
  telefone: string,
  dataNascimento: Date,
  email: string,
  rg: string,
  cpf: string,
  login: string,
  senha: string,
};

export interface IResponsavel extends Document {
  nome: string,
  vinculo: TVinculo,
  alunos: TAluno[],
  celular: string,
  telefone: string,
  dataNascimento: Date,
  email: string,
  rg: string,
  cpf: string,
  login: string,
  senha: string,
}

export default IResponsavel;
