import { Schema, model } from 'mongoose';
import { IAluno } from '../../../../domain/interfaces/entities/Aluno';

const AlunoSchema = new Schema({
  nome: String,
  foto: String,
  sexo: String,
  matricula: {
    type: Number,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  responsaveis: [
    {
      type: Schema.Types.ObjectId,
      ref: 'responsaveis',
    },
  ],
  dataNascimento: Date,
  rg: String,
  cpf: String,
  observacoes: String,
  turma: {
    type: Schema.Types.ObjectId,
    ref: 'turmas',
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IAluno>('Alunos', AlunoSchema);
