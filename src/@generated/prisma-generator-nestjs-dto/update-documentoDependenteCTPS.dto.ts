
import {estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoDependenteCTPSDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
numero_ctps?: string;
serie_ctps?: string;
@ApiProperty({
  enum: estados,
})
uf_ctps?: estados;
local_expedicao_ctps?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_emissao_ctps?: Date;
servidorId?: string;
}
