
import {ApiProperty} from '@nestjs/swagger'
import {Instituto} from './instituto.entity'


export class InstitutoLogo {
  id: string ;
logo: string ;
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
instituto?: Instituto ;
institutoId: string ;
}
