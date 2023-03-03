
import {estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoServidorCarteiraDeClasseDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
carteira_classe?: string;
orgao_de_classe?: string;
@ApiProperty({
  enum: estados,
})
uf_de_classe?: estados;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero_inscricao_orgao?: number;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_expedicao_cdc?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_validade_cdc?: Date;
servidorId?: string;
}
