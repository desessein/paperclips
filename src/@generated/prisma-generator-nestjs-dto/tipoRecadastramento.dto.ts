
import {ApiProperty} from '@nestjs/swagger'


export class TipoRecadastramentoDto {
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
description: string ;
isActive: boolean ;
}
