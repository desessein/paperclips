
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParamRecadBeneficioDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
