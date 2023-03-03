
import {situacao_previdenciaria} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class CheckListProvaVidaDto {
  id: string ;
nome: string ;
@ApiProperty({
  enum: situacao_previdenciaria,
isArray: true,})
situacaoPrevidenciaria: situacao_previdenciaria[] ;
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
}
