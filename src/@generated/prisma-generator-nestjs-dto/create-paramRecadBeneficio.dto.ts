
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateParamRecadBeneficioDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
