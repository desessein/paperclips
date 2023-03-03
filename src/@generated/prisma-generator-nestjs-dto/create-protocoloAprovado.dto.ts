
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateProtocoloAprovadoDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
cpf: string;
mode: string;
protocolo: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
sequencia: number;
statusAtual: string;
}
