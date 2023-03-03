
import {ApiProperty} from '@nestjs/swagger'


export class NotificacoesDto {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date  | null;
title: string ;
text: string ;
}
