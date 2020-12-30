import { Schema, model } from 'mongoose';
import { IResponsavel } from '@src/app/domain/interfaces/entities/Responsavel';

const ResponsavelSchema = new Schema({
  nome: String,
  vinculo: {
    type: Schema.Types.ObjectId,
    ref: 'vinculos',
  },
  alunos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'alunos',
    },
  ],
  celular: String,
  telefone: String,
  dataNascimento: Date,
  email: {
    type: String,
    unique: true,
  },
  rg: {
    type: String,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  login: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IResponsavel>('Responsaveis', ResponsavelSchema);
