
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateParamRecadDependenteDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
