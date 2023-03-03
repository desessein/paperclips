
import {ApiProperty} from '@nestjs/swagger'


export class AuditoriaCampoServidorDto {
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
aprova: boolean  | null;
reprova: boolean  | null;
campo: string  | null;
dadoAnalisado: string  | null;
motivo: string  | null;
descricao: string  | null;
usrRecusou: string  | null;
}
