
import {InstituicaoReservista} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoServidorReservistaDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero?: number;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataExpedicao?: Date;
orgao?: string;
@ApiProperty({
  enum: InstituicaoReservista,
})
InstituicaoReservista?: InstituicaoReservista;
serie?: string;
categoria?: string;
servidorId?: string;
}
