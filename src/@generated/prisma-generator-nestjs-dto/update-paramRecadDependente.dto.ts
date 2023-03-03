
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParamRecadDependenteDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
