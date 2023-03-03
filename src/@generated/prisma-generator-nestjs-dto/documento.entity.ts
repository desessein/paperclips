
import {ApiProperty} from '@nestjs/swagger'
import {Instituto} from './instituto.entity'
import {Parametrizacoes} from './parametrizacoes.entity'
import {DocumentoCheckList} from './documentoCheckList.entity'
import {DocumentacaoServidor} from './documentacaoServidor.entity'
import {DocumentacaoServidorAWS} from './documentacaoServidorAWS.entity'


export class Documento {
  id: string ;
nome: string ;
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
instituto?: Instituto ;
institutoId: string ;
parametrizacoes?: Parametrizacoes  | null;
parametrizacoesId: string  | null;
documentoCheckList?: DocumentoCheckList[] ;
documentacaoServidor?: DocumentacaoServidor[] ;
documentacaoServidorAWS?: DocumentacaoServidorAWS[] ;
}
