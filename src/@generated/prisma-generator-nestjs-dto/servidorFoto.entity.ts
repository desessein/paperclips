
import {ApiProperty} from '@nestjs/swagger'
import {Servidor} from './servidor.entity'


export class ServidorFoto {
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
servidor?: Servidor ;
servidorId: string ;
}
