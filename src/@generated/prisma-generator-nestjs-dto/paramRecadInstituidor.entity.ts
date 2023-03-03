
import {ApiProperty} from '@nestjs/swagger'
import {Parametrizacoes} from './parametrizacoes.entity'


export class ParamRecadInstituidor {
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
exibirCPF: boolean ;
exibirNomeInstituidor: boolean ;
exibirSexoInstituidor: boolean ;
exibirMotivoInicioDependencia: boolean ;
exibirDataNascimentoInstituidor: boolean ;
exibirDataFalecimentoInstituidor: boolean ;
exibirDataInicioDependencia: boolean ;
exibirDataFimDependencia: boolean ;
obrigarDataFimDependencia: boolean ;
obrigarDataInicioDependencia: boolean ;
obrigarDataFalecimentoInstituidor: boolean ;
obrigarDataNascimentoInstituidor: boolean ;
obrigarMotivoInicioDependencia: boolean ;
obrigarSexoInstituidor: boolean ;
obrigarNomeInstituidor: boolean ;
obrigarCPF: boolean ;
}
