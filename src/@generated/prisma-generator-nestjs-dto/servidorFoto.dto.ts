
import {ApiProperty} from '@nestjs/swagger'


export class ServidorFotoDto {
  id: string ;
foto: string ;
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
