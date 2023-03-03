
import {ApiProperty} from '@nestjs/swagger'




export class UpdateProtocoloAprovadoDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
cpf?: string;
mode?: string;
protocolo?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
sequencia?: number;
statusAtual?: string;
}
