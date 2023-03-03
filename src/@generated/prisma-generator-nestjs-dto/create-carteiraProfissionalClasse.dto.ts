
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateCarteiraProfissionalClasseDto {
  NOME: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
CP_CLASSE_ID: number;
}
