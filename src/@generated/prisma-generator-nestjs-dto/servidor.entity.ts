
import {sexo,genero,estadoCivil,regimeCasamento,raca,simNao,TipoSanguineo,escolaridade,situacaoNaturalizacao,situacao_previdenciaria,estados,InformacaoDeclarante,statusRecad,statusProvaVida} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {ServidorFoto} from './servidorFoto.entity'
import {User} from './user.entity'
import {DocumentacaoServidor} from './documentacaoServidor.entity'
import {DocumentacaoServidorAWS} from './documentacaoServidorAWS.entity'
import {EnderecoServidor} from './enderecoServidor.entity'
import {CargoServidor} from './cargoServidor.entity'
import {TempoContribuicaoServidor} from './tempoContribuicaoServidor.entity'
import {Dependentes} from './dependentes.entity'
import {Beneficios} from './beneficios.entity'
import {Instituidor} from './instituidor.entity'
import {AuditoriaAbasServidor} from './auditoriaAbasServidor.entity'
import {AuditoriaCampoServidor} from './auditoriaCampoServidor.entity'
import {AuditoriaResponsavel} from './auditoriaResponsavel.entity'
import {RegistroProvaVida} from './registroProvaVida.entity'
import {ProtocoloFinalizado} from './protocoloFinalizado.entity'
import {ProtocoloAprovado} from './protocoloAprovado.entity'
import {ProtocoloRejeitado} from './protocoloRejeitado.entity'
import {ImportSisprev} from './importSisprev.entity'
import {TipoRecadastramento} from './tipoRecadastramento.entity'
import {Instituto} from './instituto.entity'
import {ParametrizacoesBirthFilter} from './parametrizacoesBirthFilter.entity'


export class Servidor {
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
foto?: ServidorFoto  | null;
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
usrRecadReprovado: string  | null;
userRecadReprovado?: User  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadReprovado: Date  | null;
obsRecadReprovado: string  | null;
usrRecadRejeitado: string  | null;
userRecadRejeitado?: User  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadRejeitado: Date  | null;
obsRecadRejeitado: string  | null;
usrRecadAprovado: string  | null;
userRecadAprovado?: User  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataRecadAprovado: Date  | null;
documentoId: string  | null;
documentacaoServidor?: DocumentacaoServidor[] ;
documentacaoServidorAWS?: DocumentacaoServidorAWS[] ;
enderecoDoServidorId: string  | null;
enderecoServidor?: EnderecoServidor[] ;
cargosDoServidorId: string[] ;
cargosDoServidor?: CargoServidor[] ;
tempoContribuicaoDoServidorId: string[] ;
tempoContribuicaoServidor?: TempoContribuicaoServidor[] ;
dependentesId: string  | null;
dependentes?: Dependentes[] ;
beneficiosId: string[] ;
beneficios?: Beneficios[] ;
instituidorId: string[] ;
instituidor?: Instituidor[] ;
auditoriaAbasServidor?: AuditoriaAbasServidor[] ;
auditoriaCampoServidor?: AuditoriaCampoServidor[] ;
auditoriaResponsavel?: AuditoriaResponsavel  | null;
registroProvaVida?: RegistroProvaVida[] ;
protocoloFinalizado?: ProtocoloFinalizado[] ;
protocoloAprovado?: ProtocoloAprovado[] ;
protocoloRejeitado?: ProtocoloRejeitado[] ;
importSisprev?: ImportSisprev[] ;
tipoRecadastramento?: TipoRecadastramento  | null;
tipoRecadastramentoId: string  | null;
instituto?: Instituto ;
institutoId: string ;
ParametrizacoesBirthFilter?: ParametrizacoesBirthFilter  | null;
parametrizacoesBirthFilterId: string  | null;
situacaoBeneficio: string[] ;
mensagemBloqueio: string  | null;
}
