
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParamRecadInstituidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
