
import {ApiProperty} from '@nestjs/swagger'




export class UpdateNotificacoesDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
title?: string;
text?: string;
}
