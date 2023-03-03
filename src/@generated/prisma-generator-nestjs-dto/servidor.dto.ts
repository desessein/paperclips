
import {sexo,genero,estadoCivil,regimeCasamento,raca,simNao,TipoSanguineo,escolaridade,situacaoNaturalizacao,situacao_previdenciaria,estados,InformacaoDeclarante,statusRecad,statusProvaVida} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ServidorDto {
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
nomeCompleto: string  | null;
cpf: string  | null;
password: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataNascimento: Date  | null;
configNomeSocial: boolean  | null;
nomeSocial: string  | null;
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
estadoCivilOpcoes: estadoCivil  | null;
@ApiProperty({
  enum: regimeCasamento,
})
regimeCasamento: regimeCasamento  | null;
email: string  | null;
emailOutro: string  | null;
telefone: string  | null;
telefoneResidencial: string  | null;
@ApiProperty({
  enum: raca,
})
raca: raca  | null;
@ApiProperty({
  enum: simNao,
})
doadorOrgaos: simNao  | null;
@ApiProperty({
  enum: TipoSanguineo,
})
tipoSanguineo: TipoSanguineo  | null;
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
anoChegada: Date  | null;
rne: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataExpedicao: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataValidade: Date  | null;
pisPasep: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataImplantacaoBeneficio: Date  | null;
@ApiProperty({
  enum: simNao,
})
PossuiRepresentanteLegal: simNao  | null;
@ApiProperty({
  enum: InformacaoDeclarante,
})
DeclaranteInformacao: InformacaoDeclarante  | null;
DeclaranteNome: string  | null;
DeclaranteCPF: string  | null;
@ApiProperty({
  enum: sexo,
})
DeclaranteSexo: sexo  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DeclaranteDataNascimento: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DeclaranteDataInicioRepresentatividade: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DeclaranteDataFimRepresentatividade: Date  | null;
DeclaranteTelefone: string  | null;
@ApiProperty({
  enum: simNao,
})
TemTempoContribuicao: simNao  | null;
@ApiProperty({
  enum: simNao,
})
cadastroFinalizado: simNao  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
ultimaTabAcessada: number  | null;
@ApiProperty({
  enum: statusRecad,
})
statusRecad: statusRecad ;
@ApiProperty({
  enum: statusProvaVida,
})
statusProvaVida: statusProvaVida ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadCadastrado: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadReprovado: Date  | null;
obsRecadReprovado: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadRejeitado: Date  | null;
obsRecadRejeitado: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadAprovado: Date  | null;
documentoId: string  | null;
enderecoDoServidorId: string  | null;
cargosDoServidorId: string[] ;
tempoContribuicaoDoServidorId: string[] ;
dependentesId: string  | null;
beneficiosId: string[] ;
instituidorId: string[] ;
situacaoBeneficio: string[] ;
mensagemBloqueio: string  | null;
}
