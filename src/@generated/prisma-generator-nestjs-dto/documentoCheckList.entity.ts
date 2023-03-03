
import {ApiProperty} from '@nestjs/swagger'
import {Documento} from './documento.entity'
import {CheckList} from './checkList.entity'
import {DocumentoCheckListParametro} from './documentoCheckListParametro.entity'


export class DocumentoCheckList {
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
documento?: Documento ;
documentoId: string ;
checkList?: CheckList ;
checkListId: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numOrdem: number  | null;
ehObrigatorio: boolean ;
documentoCheckListParametro?: DocumentoCheckListParametro[] ;
}
