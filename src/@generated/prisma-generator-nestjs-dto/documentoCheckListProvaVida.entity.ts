
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoProvaVida} from './documentoProvaVida.entity'
import {CheckListProvaVida} from './checkListProvaVida.entity'
import {DocumentoCheckListProvaVidaParametro} from './documentoCheckListProvaVidaParametro.entity'


export class DocumentoCheckListProvaVida {
  id: string ;
documentoProvaVida?: DocumentoProvaVida ;
documentoProvaVidaId: string ;
checkListProvaVida?: CheckListProvaVida ;
checkListProvaVidaId: string ;
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
documentoCheckListProvaVidaParametro?: DocumentoCheckListProvaVidaParametro[] ;
}
