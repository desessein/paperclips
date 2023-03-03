
import {ApiProperty} from '@nestjs/swagger'


export class DocumentoDependentePassaporteDto {
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
numero_passaporte: string  | null;
orgao_expedidor_passaporte: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_passaporte_expedicao: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_passaporte_validade: Date  | null;
servidorId: string  | null;
}