
import {sexo,genero,estadoCivil,regimeCasamento,raca,escolaridade,situacaoNaturalizacao,situacao_previdenciaria,estados,simNao} from '@prisma/client'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateImportSisprevDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
sisprevIDSegurado?: number;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
sisprevIDPessoa?: number;
foto?: string;
nomeCompleto: string;
cpf: string;
password?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataNascimento?: Date;
@ApiProperty({
  enum: sexo,
})
sexo?: sexo;
@ApiProperty({
  enum: genero,
})
genero?: genero;
@ApiProperty({
  enum: estadoCivil,
})
estadoCivil?: estadoCivil;
@ApiProperty({
  enum: regimeCasamento,
})
regimeCasamento?: regimeCasamento;
email?: string;
telefone?: string;
@ApiProperty({
  enum: raca,
})
raca?: raca;
nomeMae?: string;
cpfMae?: string;
nomePai?: string;
cpfPai?: string;
@ApiProperty({
  enum: escolaridade,
})
escolaridade?: escolaridade;
nacionalidade?: string;
@ApiProperty({
  enum: situacaoNaturalizacao,
})
situacaoNaturalizacao?: situacaoNaturalizacao;
@ApiProperty({
  enum: situacao_previdenciaria,
isArray: true,})
situacaoPrevidenciaria: situacao_previdenciaria[];
@ApiProperty({
  enum: estados,
})
ufNaturalidade?: estados;
naturalidade?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataImplantacaoBeneficio?: Date;
situacaoBeneficio: string[];
mensagemBloqueio?: string;
cep?: string;
logradouro?: string;
bairro?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero?: number;
complemento?: string;
uf?: string;
cidade?: string;
matricula?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataIngresso?: Date;
orgao?: string;
unidade?: string;
lotacao?: string;
cargoNome?: string;
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
dataSaida?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataCedido?: Date;
@ApiProperty({
  enum: simNao,
})
doadorOrgaos?: simNao;
@ApiProperty({
  enum: simNao,
})
cedidoPorOrgao?: simNao;
cedidoAOrgao?: string;
orgaoCessionario?: string;
matriculaOrigem?: string;
cpnj?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataAdmissaoCedente?: Date;
tipoRegimePrevidenciarioCedente?: string;
UFOrgao?: string;
municipioOrgao?: string;
}
