
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUserDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
email?: string;
password?: string;
name?: string;
avatar?: string;
genero?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataNascimento?: Date;
telefone?: string;
bio?: string;
cargo?: string;
}
