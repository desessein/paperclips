
import {ApiProperty} from '@nestjs/swagger'


export class InstitutoLogoDto {
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
}
