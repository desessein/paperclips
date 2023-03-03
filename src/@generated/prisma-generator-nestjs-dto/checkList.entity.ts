
import {situacao_previdenciaria} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Instituto} from './instituto.entity'
import {Parametrizacoes} from './parametrizacoes.entity'
import {DocumentoCheckList} from './documentoCheckList.entity'


export class CheckList {
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
nome: string ;
@ApiProperty({
  enum: situacao_previdenciaria,
isArray: true,})
situacaoPrevidenciaria: situacao_previdenciaria[] ;
instituto?: Instituto ;
institutoId: string ;
parametrizacoes?: Parametrizacoes  | null;
parametrizacoesId: string  | null;
documentoCheckList?: DocumentoCheckList[] ;
}
