
import {sexo,genero,estadoCivil,regimeCasamento,raca,escolaridade,situacaoNaturalizacao,situacao_previdenciaria,estados,simNao} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ImportSisprevDto {
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
  type: `integer`,
  format: `int32`,
})
sisprevIDSegurado: number  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
sisprevIDPessoa: number  | null;
foto: string  | null;
nomeCompleto: string ;
cpf: string ;
password: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataNascimento: Date  | null;
@ApiProperty({
  enum: sexo,
})
sexo: sexo  | null;
@ApiProperty({
  enum: genero,
})
genero: genero  | null;
@ApiProperty({
  enum: estadoCivil,
})
estadoCivil: estadoCivil  | null;
@ApiProperty({
  enum: regimeCasamento,
})
regimeCasamento: regimeCasamento  | null;
email: string  | null;
telefone: string  | null;
@ApiProperty({
  enum: raca,
})
raca: raca  | null;
nomeMae: string  | null;
cpfMae: string  | null;
nomePai: string  | null;
cpfPai: string  | null;
@ApiProperty({
  enum: escolaridade,
})
escolaridade: escolaridade  | null;
nacionalidade: string  | null;
@ApiProperty({
  enum: situacaoNaturalizacao,
})
situacaoNaturalizacao: situacaoNaturalizacao  | null;
@ApiProperty({
  enum: situacao_previdenciaria,
isArray: true,})
situacaoPrevidenciaria: situacao_previdenciaria[] ;
@ApiProperty({
  enum: estados,
})
ufNaturalidade: estados  | null;
naturalidade: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataImplantacaoBeneficio: Date  | null;
situacaoBeneficio: string[] ;
mensagemBloqueio: string  | null;
cep: string  | null;
logradouro: string  | null;
bairro: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero: number  | null;
complemento: string  | null;
uf: string  | null;
cidade: string  | null;
matricula: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataIngresso: Date  | null;
orgao: string  | null;
unidade: string  | null;
lotacao: string  | null;
cargoNome: string  | null;
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
dataSaida: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataCedido: Date  | null;
@ApiProperty({
  enum: simNao,
})
doadorOrgaos: simNao  | null;
@ApiProperty({
  enum: simNao,
})
cedidoPorOrgao: simNao  | null;
cedidoAOrgao: string  | null;
orgaoCessionario: string  | null;
matriculaOrigem: string  | null;
cpnj: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataAdmissaoCedente: Date  | null;
tipoRegimePrevidenciarioCedente: string  | null;
UFOrgao: string  | null;
municipioOrgao: string  | null;
}
