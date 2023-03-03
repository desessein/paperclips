
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Servidor} from './servidor.entity'


export class AuditoriaAbasServidor {
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
acao: string  | null;
abaAnalisada: string  | null;
motivo: string  | null;
user?: User ;
userId: string ;
servidor?: Servidor ;
servidorId: string ;
}
