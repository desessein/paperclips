
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoServidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
salvoTemporariamente?: boolean;
servidorId?: string;
}
