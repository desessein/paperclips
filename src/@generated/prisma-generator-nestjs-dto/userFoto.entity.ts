
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'


export class UserFoto {
  id: string ;
foto: string ;
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
}
