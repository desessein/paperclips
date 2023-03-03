
import {InformacaoDeclarante} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Instituto} from './instituto.entity'
import {Parametrizacoes} from './parametrizacoes.entity'
import {DocumentoCheckListRepresentanteLegal} from './documentoCheckListRepresentanteLegal.entity'


export class CheckListRepresentanteLegal {
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
  enum: InformacaoDeclarante,
isArray: true,})
informacaoDeclarante: InformacaoDeclarante[] ;
instituto?: Instituto ;
institutoId: string ;
parametrizacoes?: Parametrizacoes  | null;
parametrizacoesId: string  | null;
documentoCheckListRepresentanteLegal?: DocumentoCheckListRepresentanteLegal[] ;
}
