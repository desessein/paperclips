
import {ApiProperty} from '@nestjs/swagger'




export class UpdateInstitutoLogoDto {
  logo?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
