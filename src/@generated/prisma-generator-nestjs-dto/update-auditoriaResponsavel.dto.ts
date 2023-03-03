
import {ApiProperty} from '@nestjs/swagger'




export class UpdateAuditoriaResponsavelDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
