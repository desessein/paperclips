
import {InformacaoDeclarante} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateCheckListRepresentanteLegalDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
nome?: string;
@ApiProperty({
  enum: InformacaoDeclarante,
isArray: true,})
informacaoDeclarante?: InformacaoDeclarante[];
}
