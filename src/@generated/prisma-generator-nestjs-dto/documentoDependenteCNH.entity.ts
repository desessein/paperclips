
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoDependente} from './documentoDependente.entity'


export class DocumentoDependenteCNH {
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
numero_cnh: string  | null;
categoria: string  | null;
orgao_expedidor_cnh: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_expedicao: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_validade: Date  | null;
servidorId: string  | null;
documentoDependente?: DocumentoDependente  | null;
documentoDependenteId: string  | null;
}
