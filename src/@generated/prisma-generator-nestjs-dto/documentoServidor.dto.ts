
import {ApiProperty} from '@nestjs/swagger'


export class DocumentoServidorDto {
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
salvoTemporariamente: boolean  | null;
servidorId: string ;
}
