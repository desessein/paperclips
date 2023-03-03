
import {ApiProperty} from '@nestjs/swagger'




export class UpdateLogDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
dateAt?: Date;
metodo?: string;
url?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
statusCode?: number;
userAgent?: string;
ip?: string;
body?: string;
tabela?: string;
modulo?: string;
institutoId?: string;
userId?: string;
userNome?: string;
statusMessage?: string;
grupoAcesso?: string;
}
