
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateUserFotoDto {
  foto: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
