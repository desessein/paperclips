
import {estados,publicoPrivado,tipo_de_regime_previdenciario,Esfera,tipo_de_vinculo,simNao} from '@prisma/client'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateTempoContribuicaoServidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataIinicial?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataFinal?: Date;
NomeEmpresa?: string;
@ApiProperty({
  enum: estados,
})
UF?: estados;
Municipio?: string;
CNPJ?: string;
Cargo?: string;
@ApiProperty({
  enum: publicoPrivado,
})
TipoContribuicao?: publicoPrivado;
@ApiProperty({
  enum: tipo_de_regime_previdenciario,
})
RegimeTrabalho?: tipo_de_regime_previdenciario;
@ApiProperty({
  enum: Esfera,
})
Esfera?: Esfera;
@ApiProperty({
  enum: tipo_de_vinculo,
})
TipoVinculo?: tipo_de_vinculo;
@ApiProperty({
  enum: simNao,
})
TempoMagisterio?: simNao;
@ApiProperty({
  enum: simNao,
})
CTC?: simNao;
@ApiProperty({
  enum: simNao,
})
HistFunc?: simNao;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataCTC?: Date;
NumCTC?: string;
OrigemTempo?: string;
MatOrigem?: string;
salvoTemporariamente?: boolean;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
auditAt?: Date;
userIdAudit?: string;
}
