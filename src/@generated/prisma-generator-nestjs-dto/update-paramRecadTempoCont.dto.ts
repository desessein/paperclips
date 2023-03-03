
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParamRecadTempoContDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
