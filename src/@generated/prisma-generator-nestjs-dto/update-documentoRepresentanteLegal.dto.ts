
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoRepresentanteLegalDto {
  nome?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
