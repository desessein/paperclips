
import {ApiProperty} from '@nestjs/swagger'


export class CarteiraProfissionalOrgaoDto {
  id: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
CP_ORGAO_ID: number ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
CP_CLASSE_ID: number ;
NOME: string ;
}
