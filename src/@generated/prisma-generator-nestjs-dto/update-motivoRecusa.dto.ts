
import {ApiProperty} from '@nestjs/swagger'




export class UpdateMotivoRecusaDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
motivo?: string;
}
