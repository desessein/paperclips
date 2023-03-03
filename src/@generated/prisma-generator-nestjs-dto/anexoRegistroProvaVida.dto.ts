
import {ApiProperty} from '@nestjs/swagger'


export class AnexoRegistroProvaVidaDto {
  id: string ;
nome: string ;
foto: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
tipo: number  | null;
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
