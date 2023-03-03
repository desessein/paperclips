
import {estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoDependente} from './documentoDependente.entity'


export class DocumentoDependenteCTPS {
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
numero_ctps: string  | null;
serie_ctps: string  | null;
@ApiProperty({
  enum: estados,
})
uf_ctps: estados  | null;
local_expedicao_ctps: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_emissao_ctps: Date  | null;
servidorId: string  | null;
documentoDependente?: DocumentoDependente  | null;
documentoDependenteId: string  | null;
}
