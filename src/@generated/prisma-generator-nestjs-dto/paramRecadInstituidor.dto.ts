
import {ApiProperty} from '@nestjs/swagger'


export class ParamRecadInstituidorDto {
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
