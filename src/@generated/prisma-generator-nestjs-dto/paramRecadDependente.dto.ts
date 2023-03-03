
import {ApiProperty} from '@nestjs/swagger'


export class ParamRecadDependenteDto {
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
ativaDependRG: boolean ;
ativaDependCNH: boolean ;
ativaDependPassporte: boolean ;
ativaDependCTPS: boolean ;
ativaDependCtProf: boolean ;
exibirTipoDependencia: boolean ;
exibirDependenteEconomico: boolean ;
exibirCPFDependente: boolean ;
exibirNomeDependente: boolean ;
exibirSexoDependente: boolean ;
exibirDataNascDependente: boolean ;
exibirNomeMaeDependente: boolean ;
exibirNomePaiDependente: boolean ;
exibirCartaoNacSaudeDependente: boolean ;
exibirNecEspeciaisDependente: boolean ;
exibirPISPASEPDependente: boolean ;
exibirNacionalidadeDependente: boolean ;
exibirSitNaturalizacaoDependente: boolean ;
exibirUFNascimentoDependente: boolean ;
exibirNaturalidadeDependente: boolean ;
exibirAnoChegadaDependente: boolean ;
exibirRNEDependente: boolean ;
exibirDataExpedicaoDependente: boolean ;
exibirValidadeDependente: boolean ;
exibirPortadorDeficienciaDependente: boolean ;
exibirTipoNecessidadeDependente: boolean ;
exibirCIDDependente: boolean ;
exibirDataLaudoDependente: boolean ;
exibirDependTipo: boolean ;
exibirDependCNH: boolean ;
exibirDependCategoriaCNH: boolean ;
exibirDependClasseCPC: boolean ;
exibirDependDataEmissaoCTPS: boolean ;
exibirDependDataExpedicaoCNH: boolean ;
exibirDependDataExpedicaoCPC: boolean ;
exibirDependDataExpedicaoPassaporte: boolean ;
exibirDependDataExpedicaoRGRIC: boolean ;
exibirDependDataValidadeCNH: boolean ;
exibirDependDataValidadeCPC: boolean ;
exibirDependDataValidadePassaporte: boolean ;
exibirDependInscricaoOrgaoCPC: boolean ;
exibirDependLocalExpedicaoCTPS: boolean ;
exibirDependNumeroCTPSPassaporte: boolean ;
exibirDependNumeroPassaporte: boolean ;
exibirDependNumeroRGRIC: boolean ;
exibirDependOrgaoDependClasseCPC: boolean ;
exibirDependOrgaoExpeditorCNH: boolean ;
exibirDependOrgaoExpeditorPassaporte: boolean ;
exibirDependOrgaoRGRIC: boolean ;
exibirDependSerieCTPS: boolean ;
exibirDependUFCPC: boolean ;
exibirDependUFOrgaoCTPS: boolean ;
exibirDependUFRGRIC: boolean ;
obrigarTipoDependencia: boolean ;
obrigarDependenteEconomico: boolean ;
obrigarCPFDependente: boolean ;
obrigarNomeDependente: boolean ;
obrigarSexoDependente: boolean ;
obrigarDataNascDependente: boolean ;
obrigarNomeMaeDependente: boolean ;
obrigarNomePaiDependente: boolean ;
obrigarCartaoNacSaudeDependente: boolean ;
obrigarNecEspeciaisDependente: boolean ;
obrigarPISPASEPDependente: boolean ;
obrigarNacionalidadeDependente: boolean ;
obrigarSitNaturalizacaoDependente: boolean ;
obrigarUFNascimentoDependente: boolean ;
obrigarNaturalidadeDependente: boolean ;
obrigarAnoChegadaDependente: boolean ;
obrigarRNEDependente: boolean ;
obrigarDataExpedicaoDependente: boolean ;
obrigarValidadeDependente: boolean ;
obrigarPortadorDeficienciaDependente: boolean ;
obrigarTipoNecessidadeDependente: boolean ;
obrigarCIDDependente: boolean ;
obrigarDataLaudoDependente: boolean ;
obrigarDependTipo: boolean ;
obrigarDependCNH: boolean ;
obrigarDependCategoriaCNH: boolean ;
obrigarDependClasseCPC: boolean ;
obrigarDependDataEmissaoCTPS: boolean ;
obrigarDependDataExpedicaoCNH: boolean ;
obrigarDependDataExpedicaoCPC: boolean ;
obrigarDependDataExpedicaoPassaporte: boolean ;
obrigarDependDataExpedicaoRGRIC: boolean ;
obrigarDependDataValidadeCNH: boolean ;
obrigarDependDataValidadeCPC: boolean ;
obrigarDependDataValidadePassaporte: boolean ;
obrigarDependInscricaoOrgaoCPC: boolean ;
obrigarDependLocalExpedicaoCTPS: boolean ;
obrigarDependNumeroCTPSPassaporte: boolean ;
obrigarDependNumeroPassaporte: boolean ;
obrigarDependNumeroRGRIC: boolean ;
obrigarDependOrgaoDependClasseCPC: boolean ;
obrigarDependOrgaoExpeditorCNH: boolean ;
obrigarDependOrgaoExpeditorPassaporte: boolean ;
obrigarDependOrgaoRGRIC: boolean ;
obrigarDependSerieCTPS: boolean ;
obrigarDependUFCPC: boolean ;
obrigarDependUFOrgaoCTPS: boolean ;
obrigarDependUFRGRIC: boolean ;
}
