
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateMotivoRecusaDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
motivo: string;
}
