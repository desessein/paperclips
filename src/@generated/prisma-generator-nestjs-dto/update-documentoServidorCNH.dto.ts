
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoServidorCNHDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
numero_cnh?: string;
categoria?: string;
orgao_expedidor_cnh?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_expedicao?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_validade?: Date;
servidorId?: string;
}
