
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateParamRecadTempoContDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
