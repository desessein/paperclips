
import {ApiProperty} from '@nestjs/swagger'


export class ParamRecadCargosDto {
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
ativarAddUmCargo: boolean ;
exibirCNPJ: boolean ;
exibirCargo: boolean ;
exibirCedidoPorOrgao: boolean ;
exibirCedidoAOrgao: boolean ;
exibirDataAdmissaoCedente: boolean ;
exibirDataIngresso: boolean ;
exibirLotacao: boolean ;
exibirMatriculaOrigem: boolean ;
exibirMatricula: boolean ;
exibirMunicipioOrgao: boolean ;
exibirNumeroTermoPosse: boolean ;
exibirOrgao: boolean ;
exibirOrgaoCedente: boolean ;
exibirRemuneracaoMensalTotal: boolean ;
exibirDataDemissao: boolean ;
exibirDataCedido: boolean ;
exibirSituacaoFuncional: boolean ;
exibirTipoRegimePrevCedente: boolean ;
exibirUFOrgao: boolean ;
exibirUnidade: boolean ;
exibirVencimentoBase: boolean ;
exibirOrgaoCessionario: boolean ;
obrigarOrgaoCessionario: boolean ;
obrigarCNPJ: boolean ;
obrigarCargo: boolean ;
obrigarCedidoPorOrgao: boolean ;
obrigarCedidoAOrgao: boolean ;
obrigarDataAdmissaoCedente: boolean ;
obrigarDataIngresso: boolean ;
obrigarLotacao: boolean ;
obrigarMatriculaOrigem: boolean ;
obrigarMatricula: boolean ;
obrigarMunicipioOrgao: boolean ;
obrigarNumeroTermoPosse: boolean ;
obrigarOrgao: boolean ;
obrigarOrgaoCedente: boolean ;
obrigarRemuneracaoMensalTotal: boolean ;
obrigarDataDemissao: boolean ;
obrigarDataCedido: boolean ;
obrigarSituacaoFuncional: boolean ;
obrigarTipoRegimePrevCedente: boolean ;
obrigarUFOrgao: boolean ;
obrigarUnidade: boolean ;
obrigarVencimentoBase: boolean ;
}
