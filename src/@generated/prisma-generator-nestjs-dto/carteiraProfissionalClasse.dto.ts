
import {ApiProperty} from '@nestjs/swagger'


export class CarteiraProfissionalClasseDto {
  id: string ;
NOME: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
CP_CLASSE_ID: number ;
}
