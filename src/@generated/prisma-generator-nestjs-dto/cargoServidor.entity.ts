
import {simNao,tipo_de_regime_previdenciario,estados,statusRegistroAudit} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Servidor} from './servidor.entity'
import {SituacaoFuncional} from './situacaoFuncional.entity'


export class CargoServidor {
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
matricula: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataIngresso: Date  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numTermoPosse: number  | null;
orgao: string  | null;
unidade: string  | null;
lotacao: string  | null;
nome: string  | null;
@ApiProperty({
  type: `number`,
  format: `float`,
})
vencimentoBase: number  | null;
@ApiProperty({
  type: `number`,
  format: `float`,
})
remuneracaoMensalTotal: number  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataDemissao: Date  | null;
@ApiProperty({
  enum: simNao,
})
cedidoPorOrgao: simNao  | null;
cedidoAOrgao: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataCedido: Date  | null;
orgaoCessionario: string  | null;
matriculaOrigem: string  | null;
CNPJ: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataAdmissaoCedente: Date  | null;
@ApiProperty({
  enum: tipo_de_regime_previdenciario,
})
tipoRegimePrevidenciarioCedente: tipo_de_regime_previdenciario  | null;
orgaoCedente: string  | null;
@ApiProperty({
  enum: estados,
})
UFOrgao: estados  | null;
municipioOrgao: string  | null;
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
situacaoFuncional?: SituacaoFuncional  | null;
situacaoFuncionalId: string  | null;
}
