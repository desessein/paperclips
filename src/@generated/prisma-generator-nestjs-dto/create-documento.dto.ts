
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoDto {
  nome: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
