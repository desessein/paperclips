
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateNotificacoesDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
title: string;
text: string;
}
