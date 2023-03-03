
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateParamRecadEnderecoDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
