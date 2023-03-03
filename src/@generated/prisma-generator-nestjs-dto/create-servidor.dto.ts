
import {sexo,genero,estadoCivil,regimeCasamento,raca,simNao,TipoSanguineo,escolaridade,situacaoNaturalizacao,situacao_previdenciaria,estados,InformacaoDeclarante} from '@prisma/client'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateServidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
nomeCompleto?: string;
cpf?: string;
password?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataNascimento?: Date;
configNomeSocial?: boolean;
nomeSocial?: string;
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
estadoCivilOpcoes?: estadoCivil;
@ApiProperty({
  enum: regimeCasamento,
})
regimeCasamento?: regimeCasamento;
email?: string;
emailOutro?: string;
telefone?: string;
telefoneResidencial?: string;
@ApiProperty({
  enum: raca,
})
raca?: raca;
@ApiProperty({
  enum: simNao,
})
doadorOrgaos?: simNao;
@ApiProperty({
  enum: TipoSanguineo,
})
tipoSanguineo?: TipoSanguineo;
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
anoChegada?: Date;
rne?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataExpedicao?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataValidade?: Date;
pisPasep?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataImplantacaoBeneficio?: Date;
@ApiProperty({
  enum: simNao,
})
PossuiRepresentanteLegal?: simNao;
@ApiProperty({
  enum: InformacaoDeclarante,
})
DeclaranteInformacao?: InformacaoDeclarante;
DeclaranteNome?: string;
DeclaranteCPF?: string;
@ApiProperty({
  enum: sexo,
})
DeclaranteSexo?: sexo;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DeclaranteDataNascimento?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DeclaranteDataInicioRepresentatividade?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DeclaranteDataFimRepresentatividade?: Date;
DeclaranteTelefone?: string;
@ApiProperty({
  enum: simNao,
})
TemTempoContribuicao?: simNao;
@ApiProperty({
  enum: simNao,
})
cadastroFinalizado?: simNao;
@ApiProperty({
  type: `integer`,
  format: `int32`,
  default: 0,
})
ultimaTabAcessada?: number;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadCadastrado?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadReprovado?: Date;
obsRecadReprovado?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadRejeitado?: Date;
obsRecadRejeitado?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadAprovado?: Date;
documentoId?: string;
enderecoDoServidorId?: string;
cargosDoServidorId: string[];
tempoContribuicaoDoServidorId: string[];
dependentesId?: string;
beneficiosId: string[];
instituidorId: string[];
situacaoBeneficio: string[];
mensagemBloqueio?: string;
}
