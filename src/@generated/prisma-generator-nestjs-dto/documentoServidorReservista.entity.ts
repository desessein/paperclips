
import {InstituicaoReservista} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoServidor} from './documentoServidor.entity'


export class DocumentoServidorReservista {
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
  type: `integer`,
  format: `int32`,
})
numero: number  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataExpedicao: Date  | null;
orgao: string  | null;
@ApiProperty({
  enum: InstituicaoReservista,
})
InstituicaoReservista: InstituicaoReservista  | null;
serie: string  | null;
categoria: string  | null;
servidorId: string  | null;
documentoServidor?: DocumentoServidor[] ;
}
