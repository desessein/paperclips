
import {simNao,tipo_de_regime_previdenciario,estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateCargoServidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
matricula?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataIngresso?: Date;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numTermoPosse?: number;
orgao?: string;
unidade?: string;
lotacao?: string;
nome?: string;
@ApiProperty({
  type: `number`,
  format: `float`,
})
vencimentoBase?: number;
@ApiProperty({
  type: `number`,
  format: `float`,
})
remuneracaoMensalTotal?: number;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataDemissao?: Date;
@ApiProperty({
  enum: simNao,
})
cedidoPorOrgao?: simNao;
cedidoAOrgao?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataCedido?: Date;
orgaoCessionario?: string;
matriculaOrigem?: string;
CNPJ?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataAdmissaoCedente?: Date;
@ApiProperty({
  enum: tipo_de_regime_previdenciario,
})
tipoRegimePrevidenciarioCedente?: tipo_de_regime_previdenciario;
orgaoCedente?: string;
@ApiProperty({
  enum: estados,
})
UFOrgao?: estados;
municipioOrgao?: string;
salvoTemporariamente?: boolean;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
auditAt?: Date;
userIdAudit?: string;
}
