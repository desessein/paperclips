
import {InformacaoDeclarante} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParamRecadDadosBasicosDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  enum: InformacaoDeclarante,
isArray: true,})
opcoestipoInformacaoDeclarante?: InformacaoDeclarante[];
}
