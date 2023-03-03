
import {estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoServidor} from './documentoServidor.entity'


export class DocumentoServidorCTPS {
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
documentoServidor?: DocumentoServidor[] ;
}
