import { Schema, model } from 'mongoose';
import { IEscola } from '@src/app/domain/interfaces/entities/Escola';

const EscolaSchema = new Schema({
  nome: String,
  login: {
    type: String,
    unique: true,
  },
  senha: String,
  token: {
    type: String,
    unique: true,
  },
}, {
  timestamps: true,
});

export default model<IEscola>('Escolas', EscolaSchema);
