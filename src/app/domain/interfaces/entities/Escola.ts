import { Document } from 'mongoose';

export interface IEscola extends Document {
  nome: string,
  login: string,
  senha: string,
  token: string,
}

export default IEscola;
