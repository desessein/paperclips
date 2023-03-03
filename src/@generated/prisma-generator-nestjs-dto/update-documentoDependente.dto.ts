
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoDependenteDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
servidorId?: string;
}
