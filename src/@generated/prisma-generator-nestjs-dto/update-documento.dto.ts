
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoDto {
  nome?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
