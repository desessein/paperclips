
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateServidorFotoDto {
  foto: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
