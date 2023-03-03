
import {ApiProperty} from '@nestjs/swagger'
import {CargoServidor} from './cargoServidor.entity'


export class SituacaoFuncional {
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
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
ID: number ;
NOME: string ;
cargoServidor?: CargoServidor[] ;
}
