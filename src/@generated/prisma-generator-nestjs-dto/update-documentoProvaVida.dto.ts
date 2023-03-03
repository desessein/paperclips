
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoProvaVidaDto {
  nome?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
