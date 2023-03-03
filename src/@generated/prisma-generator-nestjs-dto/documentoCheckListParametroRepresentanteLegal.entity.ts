
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoCheckListRepresentanteLegal} from './documentoCheckListRepresentanteLegal.entity'


export class DocumentoCheckListParametroRepresentanteLegal {
  id: string ;
documentoCheckListRepresentanteLegal?: DocumentoCheckListRepresentanteLegal ;
documentoCheckListRepresentanteLegalId: string ;
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
