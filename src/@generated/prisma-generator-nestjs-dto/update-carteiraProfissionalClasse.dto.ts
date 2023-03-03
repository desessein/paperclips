
import {ApiProperty} from '@nestjs/swagger'




export class UpdateCarteiraProfissionalClasseDto {
  NOME?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
CP_CLASSE_ID?: number;
}
