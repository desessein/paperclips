
import {estados,publicoPrivado,tipo_de_regime_previdenciario,Esfera,tipo_de_vinculo,simNao,statusRegistroAudit} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Servidor} from './servidor.entity'


export class TempoContribuicaoServidor {
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
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataIinicial: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataFinal: Date  | null;
NomeEmpresa: string  | null;
@ApiProperty({
  enum: estados,
})
UF: estados  | null;
Municipio: string  | null;
CNPJ: string  | null;
Cargo: string  | null;
@ApiProperty({
  enum: publicoPrivado,
})
TipoContribuicao: publicoPrivado  | null;
@ApiProperty({
  enum: tipo_de_regime_previdenciario,
})
RegimeTrabalho: tipo_de_regime_previdenciario  | null;
@ApiProperty({
  enum: Esfera,
})
Esfera: Esfera  | null;
@ApiProperty({
  enum: tipo_de_vinculo,
})
TipoVinculo: tipo_de_vinculo  | null;
@ApiProperty({
  enum: simNao,
})
TempoMagisterio: simNao  | null;
@ApiProperty({
  enum: simNao,
})
CTC: simNao  | null;
@ApiProperty({
  enum: simNao,
})
HistFunc: simNao  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataCTC: Date  | null;
NumCTC: string  | null;
OrigemTempo: string  | null;
MatOrigem: string  | null;
salvoTemporariamente: boolean  | null;
@ApiProperty({
  enum: statusRegistroAudit,
})
statusRegistroAudit: statusRegistroAudit ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
auditAt: Date  | null;
userIdAudit: string  | null;
servidor?: Servidor ;
servidorId: string ;
}
