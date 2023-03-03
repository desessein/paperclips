
import {ApiProperty} from '@nestjs/swagger'
import {Parametrizacoes} from './parametrizacoes.entity'


export class ParamRecadBeneficio {
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
exibirValorBeneficio: boolean ;
exibirTipoBeneficio: boolean ;
exibirOrgao: boolean ;
exibirDocumentoConcessorioNum: boolean ;
exibirDocumentoConcessorio: boolean ;
exibirDataConcessao: boolean ;
exibirMatricula: boolean ;
obrigarMatricula: boolean ;
obrigarDataConcessao: boolean ;
obrigarDocumentoConcessorio: boolean ;
obrigarDocumentoConcessorioNum: boolean ;
obrigarOrgao: boolean ;
obrigarTipoBeneficio: boolean ;
obrigarValorBeneficio: boolean ;
}
