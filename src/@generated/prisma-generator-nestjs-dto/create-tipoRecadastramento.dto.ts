
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateTipoRecadastramentoDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
description: string;
}
