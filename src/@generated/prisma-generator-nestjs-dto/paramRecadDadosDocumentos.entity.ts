
import {ApiProperty} from '@nestjs/swagger'
import {Parametrizacoes} from './parametrizacoes.entity'


export class ParamRecadDadosDocumentos {
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
ativaRG: boolean ;
ativaCNH: boolean ;
ativaPassporte: boolean ;
ativaCTPS: boolean ;
ativaCtProf: boolean ;
ativaTitulo: boolean ;
exibirCID: boolean ;
exibirCNH: boolean ;
exibirCategoriaCNH: boolean ;
exibirCidadeEleitoral: boolean ;
exibirClasseCPC: boolean ;
exibirDataEmissaoCTPS: boolean ;
exibirDataExpedicaoCNH: boolean ;
exibirDataExpedicaoCPC: boolean ;
exibirDataExpedicaoPassaporte: boolean ;
exibirDataExpedicaoRGRIC: boolean ;
exibirDataLaudo: boolean ;
exibirDataValidadeCNH: boolean ;
exibirDataValidadeCPC: boolean ;
exibirDataValidadePassaporte: boolean ;
exibirFolhasCasamento: boolean ;
exibirInscricaoOrgaoCPC: boolean ;
exibirInvalidadezTrabalho: boolean ;
exibirLivroCasamento: boolean ;
exibirLocalExpedicaoCTPS: boolean ;
exibirMatriculaCasamento: boolean ;
exibirNumeroCTPSPassaporte: boolean ;
exibirNumeroCasamento: boolean ;
exibirNumeroPassaporte: boolean ;
exibirNumeroRGRIC: boolean ;
exibirOrgaoClasseCPC: boolean ;
exibirOrgaoExpeditorCNH: boolean ;
exibirOrgaoExpeditorPassaporte: boolean ;
exibirOrgaoRGRIC: boolean ;
exibirPossuiNecessidade: boolean ;
exibirPossuiMolestiaGrave: boolean ;
exibirPossuiDoencaIncapacitante: boolean ;
exibirSecaoEleitoral: boolean ;
exibirSerieCTPS: boolean ;
exibirTipo: boolean ;
exibirTipoNecessidade: boolean ;
exibirTituloEleitor: boolean ;
exibirUFCPC: boolean ;
exibirUFEleitoral: boolean ;
exibirUFOrgaoCTPS: boolean ;
exibirUFRGRIC: boolean ;
exibirZonaEleitoral: boolean ;
exibirNumeroReservista: boolean ;
exibirDataExpedicaoReservista: boolean ;
exibirOrgaoReservista: boolean ;
exibirInstituicaoReservista: boolean ;
exibirSerieReservista: boolean ;
exibirCategoriaReservista: boolean ;
obrigarCID: boolean ;
obrigarCNH: boolean ;
obrigarCategoriaCNH: boolean ;
obrigarCidadeEleitoral: boolean ;
obrigarClasseCPC: boolean ;
obrigarDataEmissaoCTPS: boolean ;
obrigarDataExpedicaoCNH: boolean ;
obrigarDataExpedicaoCPC: boolean ;
obrigarDataExpedicaoPassaporte: boolean ;
obrigarDataExpedicaoRGRIC: boolean ;
obrigarDataLaudo: boolean ;
obrigarDataValidadeCNH: boolean ;
obrigarDataValidadeCPC: boolean ;
obrigarDataValidadePassaporte: boolean ;
obrigarFolhasCasamento: boolean ;
obrigarInscricaoOrgaoCPC: boolean ;
obrigarInvalidadezTrabalho: boolean ;
obrigarLivroCasamento: boolean ;
obrigarLocalExpedicaoCTPS: boolean ;
obrigarMatriculaCasamento: boolean ;
obrigarNumeroCTPSPassaporte: boolean ;
obrigarNumeroCasamento: boolean ;
obrigarNumeroPassaporte: boolean ;
obrigarNumeroRGRIC: boolean ;
obrigarOrgaoClasseCPC: boolean ;
obrigarOrgaoExpeditorCNH: boolean ;
obrigarOrgaoExpeditorPassaporte: boolean ;
obrigarOrgaoRGRIC: boolean ;
obrigarPossuiNecessidade: boolean ;
obrigarPossuiMolestiaGrave: boolean ;
obrigarPossuiDoencaIncapacitante: boolean ;
obrigarSecaoEleitoral: boolean ;
obrigarSerieCTPS: boolean ;
obrigarTipo: boolean ;
obrigarTipoNecessidade: boolean ;
obrigarTituloEleitor: boolean ;
obrigarUFCPC: boolean ;
obrigarUFEleitoral: boolean ;
obrigarUFOrgaoCTPS: boolean ;
obrigarUFRGRIC: boolean ;
obrigarZonaEleitoral: boolean ;
obrigarNumeroReservista: boolean ;
obrigarDataExpedicaoReservista: boolean ;
obrigarOrgaoReservista: boolean ;
obrigarInstituicaoReservista: boolean ;
obrigarSerieReservista: boolean ;
obrigarCategoriaReservista: boolean ;
}
