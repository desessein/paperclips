
import {ApiProperty} from '@nestjs/swagger'


export class ParamRecadTempoContDto {
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
exibirTemTempoContribuicao: boolean ;
exibirCNPJTempoContrib: boolean ;
exibirCTC: boolean ;
exibirCargoTempoContrib: boolean ;
exibirDataFinal: boolean ;
exibirDataInicial: boolean ;
exibirEnteEmpregador: boolean ;
exibirEsferaTempoContrib: boolean ;
exibirMunicipioTempoContrib: boolean ;
exibirRegimeTrabalho: boolean ;
exibirTempoMagisterio: boolean ;
exibirTipoContribuicao: boolean ;
exibirTipoVinculo: boolean ;
exibirUFTempoContrib: boolean ;
exibirDataCTC: boolean ;
exibirProtocoloCTC: boolean ;
exibirOrigemTempoCTC: boolean ;
exibirHistoricoFuncional: boolean ;
exibirMatriculaCTC: boolean ;
obrigarTemTempoContribuicao: boolean ;
obrigarCNPJTempoContrib: boolean ;
obrigarCTC: boolean ;
obrigarCargoTempoContrib: boolean ;
obrigarDataFinal: boolean ;
obrigarDataInicial: boolean ;
obrigarEnteEmpregador: boolean ;
obrigarEsferaTempoContrib: boolean ;
obrigarMunicipioTempoContrib: boolean ;
obrigarRegimeTrabalho: boolean ;
obrigarTempoMagisterio: boolean ;
obrigarTipoContribuicao: boolean ;
obrigarTipoVinculo: boolean ;
obrigarUFTempoContrib: boolean ;
obrigarDataCTC: boolean ;
obrigarProtocoloCTC: boolean ;
obrigarOrigemTempoCTC: boolean ;
obrigarHistoricoFuncional: boolean ;
obrigarMatriculaCTC: boolean ;
}
