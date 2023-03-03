
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateInstitutoLogoDto {
  logo: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
