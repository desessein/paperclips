
import {situacao_previdenciaria} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Instituto} from './instituto.entity'
import {Parametrizacoes} from './parametrizacoes.entity'
import {DocumentoCheckListProvaVida} from './documentoCheckListProvaVida.entity'


export class CheckListProvaVida {
  id: string ;
nome: string ;
@ApiProperty({
  enum: situacao_previdenciaria,
isArray: true,})
situacaoPrevidenciaria: situacao_previdenciaria[] ;
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
}
