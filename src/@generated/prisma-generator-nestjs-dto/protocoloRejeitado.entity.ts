
import {ApiProperty} from '@nestjs/swagger'
import {Servidor} from './servidor.entity'
import {User} from './user.entity'
import {Instituto} from './instituto.entity'


export class ProtocoloRejeitado {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date  | null;
servidor?: Servidor ;
servidorId: string ;
cpf: string ;
mode: string ;
protocolo: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
sequencia: number ;
statusAtual: string ;
user?: User  | null;
userId: string  | null;
instituto?: Instituto ;
institutoId: string ;
}
