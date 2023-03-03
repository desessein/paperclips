
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoCheckList} from './documentoCheckList.entity'


export class DocumentoCheckListParametro {
  id: string ;
documentoCheckList?: DocumentoCheckList ;
documentoCheckListId: string ;
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
