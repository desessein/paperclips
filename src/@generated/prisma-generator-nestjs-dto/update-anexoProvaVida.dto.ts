
import {ApiProperty} from '@nestjs/swagger'




export class UpdateAnexoProvaVidaDto {
  nome?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
tipo?: number;
mime?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
