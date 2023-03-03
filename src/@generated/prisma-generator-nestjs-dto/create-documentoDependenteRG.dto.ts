
import {tipo_rg_ric,estados} from '@prisma/client'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoDependenteRGDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  enum: tipo_rg_ric,
})
tipo_rg_ric?: tipo_rg_ric;
numero_rg_ric?: string;
orgao_rg_ric?: string;
@ApiProperty({
  enum: estados,
})
uf_rg_ric?: estados;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_rg_ric?: Date;
servidorId?: string;
}
