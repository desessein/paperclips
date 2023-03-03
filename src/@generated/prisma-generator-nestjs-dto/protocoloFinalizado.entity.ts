
import {ApiProperty} from '@nestjs/swagger'
import {Servidor} from './servidor.entity'
import {Instituto} from './instituto.entity'


export class ProtocoloFinalizado {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date  | null;
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
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
auditado: number  | null;
instituto?: Instituto ;
institutoId: string ;
}
