import { Document } from 'mongoose';

export type TTurma = {
  nome: string,
  ano: string,
  status: boolean,
};

export interface ITurma extends Document {
  nome: string,
  ano: string,
  status: boolean,
}

export default ITurma;
