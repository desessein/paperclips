
import {ApiProperty} from '@nestjs/swagger'


export class ProtocoloRejeitadoDto {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date  | null;
cpf: string ;
mode: string ;
protocolo: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
sequencia: number ;
statusAtual: string ;
}
