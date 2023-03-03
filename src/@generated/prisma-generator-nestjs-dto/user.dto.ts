
import {Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class UserDto {
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
email: string ;
password: string ;
name: string  | null;
avatar: string  | null;
genero: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataNascimento: Date  | null;
telefone: string  | null;
bio: string  | null;
cargo: string  | null;
@ApiProperty({
  enum: Role,
})
role: Role ;
isActive: boolean ;
}
