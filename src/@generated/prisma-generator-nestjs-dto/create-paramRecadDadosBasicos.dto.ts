
import {InformacaoDeclarante} from '@prisma/client'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateParamRecadDadosBasicosDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  enum: InformacaoDeclarante,
isArray: true,})
opcoestipoInformacaoDeclarante: InformacaoDeclarante[];
}
