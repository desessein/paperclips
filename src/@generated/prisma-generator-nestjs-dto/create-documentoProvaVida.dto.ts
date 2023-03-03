
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoProvaVidaDto {
  nome: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
