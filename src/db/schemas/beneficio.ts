import { FormaRecepcion, TipoOperacion, TipoPersona } from '../../types/enums';
import { CatalogoSchema } from './catalogo';
import { MontoSchema } from './monto';
import { Schema } from 'mongoose';
import { TerceroSchema } from './tercero';


export const BeneficioSchema = new Schema({
  tipoOperacion: {
    type: String,
    enum: TipoOperacion,
  },
  tipoPersona: {
    type: String,
    enum: TipoPersona,
  },
  tipoBeneficio: CatalogoSchema,
  beneficiario: [CatalogoSchema],
  otorgante: TerceroSchema,
  formaRecepcion: {
    type: String,
    enum: FormaRecepcion,
  },
  especifiqueBeneficio: {
    type: String,
    trim: true,
  },
  montoMensualAproximado: MontoSchema,
  sector: CatalogoSchema,
});