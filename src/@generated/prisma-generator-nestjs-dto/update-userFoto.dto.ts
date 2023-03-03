
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUserFotoDto {
  foto?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
