
import {tipo_rg_ric,estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoDependente} from './documentoDependente.entity'


export class DocumentoDependenteRG {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date  | null;
@ApiProperty({
  enum: tipo_rg_ric,
})
tipo_rg_ric: tipo_rg_ric  | null;
numero_rg_ric: string  | null;
orgao_rg_ric: string  | null;
@ApiProperty({
  enum: estados,
})
uf_rg_ric: estados  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_rg_ric: Date  | null;
servidorId: string  | null;
documentoDependente?: DocumentoDependente  | null;
documentoDependenteId: string  | null;
}
