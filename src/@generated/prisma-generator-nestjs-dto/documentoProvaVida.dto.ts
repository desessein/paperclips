
import {ApiProperty} from '@nestjs/swagger'


export class DocumentoProvaVidaDto {
  id: string ;
nome: string ;
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
