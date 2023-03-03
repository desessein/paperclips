
import {ApiProperty} from '@nestjs/swagger'
import {Parametrizacoes} from './parametrizacoes.entity'


export class ParamRecadEndereco {
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
exibirLocalResidencia: boolean ;
obrigarLocalResidencia: boolean ;
exibirBairroBrasil: boolean ;
exibirCEPBrasil: boolean ;
exibirCidadeBrasil: boolean ;
exibirComplementoBrasil: boolean ;
exibirLogradouroBrasil: boolean ;
exibirNumeroBrasil: boolean ;
exibirUFBrasil: boolean ;
exibirTipoLogradouroBrasil: boolean ;
exibirDescricaoBrasil: boolean ;
exibirPontoReferenciaBrasil: boolean ;
exibirCidadeResidenciaExterior: boolean ;
exibirCodigoPostalExterior: boolean ;
exibirComplementoExterior: boolean ;
exibirEnderecoExterior: boolean ;
exibirPaisExterior: boolean ;
exibirTipoLogradouroExterior: boolean ;
exibirDescricaoExterior: boolean ;
exibirBairroExterior: boolean ;
exibirNumeroExterior: boolean ;
exibirEstadoExterior: boolean ;
obrigarBairroBrasil: boolean ;
obrigarCEPBrasil: boolean ;
obrigarCidadeBrasil: boolean ;
obrigarComplementoBrasil: boolean ;
obrigarLogradouroBrasil: boolean ;
obrigarNumeroBrasil: boolean ;
obrigarUFBrasil: boolean ;
obrigarTipoLogradouroBrasil: boolean ;
obrigarDescricaoBrasil: boolean ;
obrigarPontoReferenciaBrasil: boolean ;
obrigarCidadeResidenciaExterior: boolean ;
obrigarCodigoPostalExterior: boolean ;
obrigarComplementoExterior: boolean ;
obrigarEnderecoExterior: boolean ;
obrigarPaisExterior: boolean ;
obrigarTipoLogradouroExterior: boolean ;
obrigarDescricaoExterior: boolean ;
obrigarBairroExterior: boolean ;
obrigarNumeroExterior: boolean ;
obrigarEstadoExterior: boolean ;
carregaAutomaticoCorreios: boolean ;
}
