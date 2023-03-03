
import {situacao_previdenciaria} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateCheckListProvaVidaDto {
  nome?: string;
@ApiProperty({
  enum: situacao_previdenciaria,
isArray: true,})
situacaoPrevidenciaria?: situacao_previdenciaria[];
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
