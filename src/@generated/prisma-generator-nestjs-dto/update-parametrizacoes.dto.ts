
import {situacao_previdenciaria} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParametrizacoesDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
titulo?: string;
@ApiProperty({
  enum: situacao_previdenciaria,
isArray: true,})
situacaoPrevidenciaria?: situacao_previdenciaria[];
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataVigenteInicio?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataVigenteFim?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataLimiteImplantacao?: Date;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
anoReferencia?: number;
msgVigenciaAnteriorPendente?: string;
msgVigenciaAtualPendente?: string;
msgVigenciaPosteriorPendente?: string;
}
