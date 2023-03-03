
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoDependentePassaporteDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
numero_passaporte?: string;
orgao_expedidor_passaporte?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_passaporte_expedicao?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_passaporte_validade?: Date;
servidorId?: string;
}
