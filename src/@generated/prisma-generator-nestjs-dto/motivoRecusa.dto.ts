
import {ApiProperty} from '@nestjs/swagger'


export class MotivoRecusaDto {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date  | null;
motivo: string ;
isActive: boolean ;
}
