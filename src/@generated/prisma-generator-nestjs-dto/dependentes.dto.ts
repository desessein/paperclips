
import {tipo_de_dependencia,simNao,sexo,situacaoNaturalizacao,estados,statusRegistroAudit} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DependentesDto {
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
  enum: tipo_de_dependencia,
})
TipoDependencia: tipo_de_dependencia  | null;
@ApiProperty({
  enum: simNao,
})
DependenteEconomico: simNao  | null;
CPF: string  | null;
Nome: string  | null;
@ApiProperty({
  enum: sexo,
})
Sexo: sexo  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataNascimento: Date  | null;
nomeMae: string  | null;
nomePai: string  | null;
salvoTemporariamente: boolean  | null;
CartaoNacionalSaude: string  | null;
@ApiProperty({
  enum: simNao,
})
NecessidadeEspecial: simNao  | null;
PisPasep: string  | null;
Nacionalidade: string  | null;
@ApiProperty({
  enum: situacaoNaturalizacao,
})
Naturalizacao: situacaoNaturalizacao  | null;
@ApiProperty({
  enum: estados,
})
UFNaturalidade: estados  | null;
naturalidade: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
AnoChegada: Date  | null;
Rne: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataExpedicao: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataValidade: Date  | null;
NecessidadeTipo: string  | null;
NecessidadeCid: string[] ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
NecessidadeDataLaudo: Date  | null;
docIdentificacaoDependenteId: string  | null;
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
}
