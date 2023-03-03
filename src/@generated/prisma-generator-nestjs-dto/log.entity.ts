
import {ApiProperty} from '@nestjs/swagger'


export class Log {
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
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dateAt: Date  | null;
metodo: string  | null;
url: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
statusCode: number  | null;
userAgent: string  | null;
ip: string  | null;
body: string  | null;
tabela: string  | null;
modulo: string  | null;
institutoId: string  | null;
userId: string  | null;
userNome: string  | null;
statusMessage: string  | null;
grupoAcesso: string  | null;
}
