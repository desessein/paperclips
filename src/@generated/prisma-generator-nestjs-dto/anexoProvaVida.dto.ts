
import {ApiProperty} from '@nestjs/swagger'


export class AnexoProvaVidaDto {
  id: string ;
nome: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
tipo: number  | null;
mime: string  | null;
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
