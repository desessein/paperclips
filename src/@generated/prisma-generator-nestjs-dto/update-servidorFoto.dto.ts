
import {ApiProperty} from '@nestjs/swagger'




export class UpdateServidorFotoDto {
  foto?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
