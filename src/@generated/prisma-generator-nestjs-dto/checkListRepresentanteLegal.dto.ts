
import {InformacaoDeclarante} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class CheckListRepresentanteLegalDto {
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
nome: string ;
@ApiProperty({
  enum: InformacaoDeclarante,
isArray: true,})
informacaoDeclarante: InformacaoDeclarante[] ;
}
