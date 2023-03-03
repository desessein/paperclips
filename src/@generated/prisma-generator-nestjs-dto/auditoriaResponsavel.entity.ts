
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Servidor} from './servidor.entity'


export class AuditoriaResponsavel {
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
servidor?: Servidor ;
servidorId: string ;
}
