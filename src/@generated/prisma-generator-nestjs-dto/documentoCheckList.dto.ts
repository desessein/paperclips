
import {ApiProperty} from '@nestjs/swagger'


export class DocumentoCheckListDto {
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
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numOrdem: number  | null;
ehObrigatorio: boolean ;
}
