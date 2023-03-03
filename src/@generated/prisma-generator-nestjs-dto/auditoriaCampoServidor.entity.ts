
import {ApiProperty} from '@nestjs/swagger'
import {Servidor} from './servidor.entity'


export class AuditoriaCampoServidor {
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
servidor?: Servidor ;
servidorId: string ;
}
