
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoRepresentanteLegal} from './documentoRepresentanteLegal.entity'
import {CheckListRepresentanteLegal} from './checkListRepresentanteLegal.entity'
import {DocumentoCheckListParametroRepresentanteLegal} from './documentoCheckListParametroRepresentanteLegal.entity'


export class DocumentoCheckListRepresentanteLegal {
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
DocumentoRepresentanteLegal?: DocumentoRepresentanteLegal  | null;
documentoRepresentanteLegalId: string  | null;
CheckListRepresentanteLegal?: CheckListRepresentanteLegal  | null;
checkListRepresentanteLegalId: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numOrdem: number  | null;
ehObrigatorio: boolean ;
documentoCheckListParametroRepresentanteLegal?: DocumentoCheckListParametroRepresentanteLegal[] ;
}
