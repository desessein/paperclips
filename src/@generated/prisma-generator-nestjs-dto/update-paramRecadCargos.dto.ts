
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParamRecadCargosDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
