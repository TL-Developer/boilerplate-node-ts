import { Document } from 'mongoose';

export type TVinculo = {
  label: string,
};

export interface IVinculo extends Document {
  label: string,
}

export default IVinculo;
