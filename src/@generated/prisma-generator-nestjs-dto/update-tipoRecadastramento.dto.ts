
import {ApiProperty} from '@nestjs/swagger'




export class UpdateTipoRecadastramentoDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
description?: string;
}
