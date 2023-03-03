
import {ApiProperty} from '@nestjs/swagger'


export class AuditoriaAbasServidorDto {
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
}
