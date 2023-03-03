
import {ApiProperty} from '@nestjs/swagger'
import {Instituto} from './instituto.entity'


export class MotivoRecusa {
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
instituto?: Instituto ;
institutoId: string ;
}
