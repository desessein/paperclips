
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'


export class Notificacoes {
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
user?: User ;
userId: string ;
title: string ;
text: string ;
}
