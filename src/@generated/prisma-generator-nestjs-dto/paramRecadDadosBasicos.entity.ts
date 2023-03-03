
import {InformacaoDeclarante} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Parametrizacoes} from './parametrizacoes.entity'


export class ParamRecadDadosBasicos {
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
parametrizacoes?: Parametrizacoes ;
parametrizacoesId: string ;
ativarApenasRNE: boolean ;
exibirAnoChegada: boolean ;
exibirCPF: boolean ;
exibirCPFPai: boolean ;
exibirCPFmae: boolean ;
exibirDataExpedicao: boolean ;
exibirDataNascimento: boolean ;
exibirEmail: boolean ;
exibirEmailOutro: boolean ;
exibirEscolaridade: boolean ;
exibirEstadoCivil: boolean ;
exibirEstrangeiro: boolean ;
exibirGenero: boolean ;
exibirNacionalidade: boolean ;
exibirUFNascimento: boolean ;
exibirNaturalidade: boolean ;
exibirNomeCompleto: boolean ;
exibirNomeMae: boolean ;
exibirNomePai: boolean ;
exibirNomeSocial: boolean ;
exibirPossuiNomeSocial: boolean ;
exibirRNE: boolean ;
exibirRaca: boolean ;
exibirDoadorOrgaos: boolean ;
exibirTipoSanguineo: boolean ;
exibirRegimeCasamento: boolean ;
exibirSexo: boolean ;
exibirSituacaoNaturalizacao: boolean ;
exibirSituacaoPrevidenciaria: boolean ;
exibirTelefone: boolean ;
exibirTelefoneResidencial: boolean ;
exibirValidade: boolean ;
exibirPisPasep: boolean ;
exibirPossuiRepresentanteLegal: boolean ;
exibirDeclaranteInformacao: boolean ;
exibirDeclaranteNome: boolean ;
exibirDeclaranteCPF: boolean ;
exibirDeclaranteSexo: boolean ;
exibirDeclaranteDataNascimento: boolean ;
exibirDeclaranteDataInicioRepresentatividade: boolean ;
exibirDeclaranteDataFimRepresentatividade: boolean ;
exibirDeclaranteTelefone: boolean ;
obrigarAnoChegada: boolean ;
obrigarCPF: boolean ;
obrigarCPFPai: boolean ;
obrigarCPFmae: boolean ;
obrigarDataExpedicao: boolean ;
obrigarDataNascimento: boolean ;
obrigarEmail: boolean ;
obrigarEmailOutro: boolean ;
obrigarEscolaridade: boolean ;
obrigarEstadoCivil: boolean ;
obrigarEstrangeiro: boolean ;
obrigarGenero: boolean ;
obrigarNacionalidade: boolean ;
obrigarUFNascimento: boolean ;
obrigarNaturalidade: boolean ;
obrigarNomeCompleto: boolean ;
obrigarNomeMae: boolean ;
obrigarNomePai: boolean ;
obrigarNomeSocial: boolean ;
obrigarPossuiNomeSocial: boolean ;
obrigarRNE: boolean ;
obrigarRaca: boolean ;
obrigarDoadorOrgaos: boolean ;
obrigarPossuiRepresentanteLegal: boolean ;
obrigarTipoSanguineo: boolean ;
obrigarRegimeCasamento: boolean ;
obrigarSexo: boolean ;
obrigarSituacaoNaturalizacao: boolean ;
obrigarSituacaoPrevidenciaria: boolean ;
obrigarTelefone: boolean ;
obrigarTelefoneResidencial: boolean ;
obrigarValidade: boolean ;
obrigarPisPasep: boolean ;
obrigarDeclaranteInformacao: boolean ;
obrigarDeclaranteNome: boolean ;
obrigarDeclaranteCPF: boolean ;
obrigarDeclaranteSexo: boolean ;
obrigarDeclaranteDataNascimento: boolean ;
obrigarDeclaranteDataInicioRepresentatividade: boolean ;
obrigarDeclaranteDataFimRepresentatividade: boolean ;
obrigarDeclaranteTelefone: boolean ;
@ApiProperty({
  enum: InformacaoDeclarante,
isArray: true,})
opcoestipoInformacaoDeclarante: InformacaoDeclarante[] ;
}
