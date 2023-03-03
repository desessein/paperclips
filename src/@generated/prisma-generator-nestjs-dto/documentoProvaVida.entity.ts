
import {ApiProperty} from '@nestjs/swagger'
import {Instituto} from './instituto.entity'
import {Parametrizacoes} from './parametrizacoes.entity'
import {DocumentoCheckListProvaVida} from './documentoCheckListProvaVida.entity'
import {DocumentacaoServidor} from './documentacaoServidor.entity'
import {DocumentacaoServidorAWS} from './documentacaoServidorAWS.entity'


export class DocumentoProvaVida {
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
documentoCheckListProvaVida?: DocumentoCheckListProvaVida[] ;
documentacaoServidor?: DocumentacaoServidor[] ;
documentacaoServidorAWS?: DocumentacaoServidorAWS[] ;
}
