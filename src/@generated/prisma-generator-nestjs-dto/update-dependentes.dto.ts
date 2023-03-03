
import {tipo_de_dependencia,simNao,sexo,situacaoNaturalizacao,estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDependentesDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  enum: tipo_de_dependencia,
})
TipoDependencia?: tipo_de_dependencia;
@ApiProperty({
  enum: simNao,
})
DependenteEconomico?: simNao;
CPF?: string;
Nome?: string;
@ApiProperty({
  enum: sexo,
})
Sexo?: sexo;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataNascimento?: Date;
nomeMae?: string;
nomePai?: string;
salvoTemporariamente?: boolean;
CartaoNacionalSaude?: string;
@ApiProperty({
  enum: simNao,
})
NecessidadeEspecial?: simNao;
PisPasep?: string;
Nacionalidade?: string;
@ApiProperty({
  enum: situacaoNaturalizacao,
})
Naturalizacao?: situacaoNaturalizacao;
@ApiProperty({
  enum: estados,
})
UFNaturalidade?: estados;
naturalidade?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
AnoChegada?: Date;
Rne?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataExpedicao?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataValidade?: Date;
NecessidadeTipo?: string;
NecessidadeCid?: string[];
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
NecessidadeDataLaudo?: Date;
docIdentificacaoDependenteId?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
auditAt?: Date;
userIdAudit?: string;
}
