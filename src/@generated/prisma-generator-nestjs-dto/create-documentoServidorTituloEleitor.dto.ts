
import {estados} from '@prisma/client'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoServidorTituloEleitorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
numero_do_titulo_eleitor?: string;
zona_eleitoral?: string;
secao_eleitoral?: string;
@ApiProperty({
  enum: estados,
})
UF_eleitoral?: estados;
cidade_eleitoral?: string;
servidorId?: string;
}
