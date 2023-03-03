
import {ApiProperty} from '@nestjs/swagger'


export class CarteiraProfissionalClasse {
  id: string ;
NOME: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
CP_CLASSE_ID: number ;
}
