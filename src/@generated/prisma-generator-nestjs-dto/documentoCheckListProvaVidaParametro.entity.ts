
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoCheckListProvaVida} from './documentoCheckListProvaVida.entity'


export class DocumentoCheckListProvaVidaParametro {
  id: string ;
documentoCheckListProvaVida?: DocumentoCheckListProvaVida ;
documentoCheckListProvaVidaId: string ;
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
}
