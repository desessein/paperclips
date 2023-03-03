
import {ApiProperty} from '@nestjs/swagger'




export class UpdateSituacaoFuncionalDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
ID?: number;
NOME?: string;
}
