
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateParamRecadInstituidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
