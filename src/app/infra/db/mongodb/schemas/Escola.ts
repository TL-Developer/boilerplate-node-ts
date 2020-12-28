import { Schema, model, Document } from 'mongoose';

interface IEscola extends Document {
  login?: string,
  password?: string,
}

const EscolaSchema = new Schema({
  login: String,
  password: String,
}, {
  timestamps: true,
});

export default model<IEscola>('Escola', EscolaSchema);
