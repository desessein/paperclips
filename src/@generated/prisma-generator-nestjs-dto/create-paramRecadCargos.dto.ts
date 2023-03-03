
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateParamRecadCargosDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
