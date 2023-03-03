
import {Poder,Esfera} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class OrgaoDto {
  id: string ;
nome: string  | null;
abreviatura: string  | null;
codigoCliente: string  | null;
cnpj: string  | null;
@ApiProperty({
  enum: Poder,
})
poder: Poder ;
@ApiProperty({
  enum: Esfera,
})
esfera: Esfera ;
responsavelNome: string ;
responsavelCargo: string ;
responsavelEmail: string  | null;
responsavelTelefone: string  | null;
responsavelUf: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
responsavelCidade: number  | null;
responsavelLogradouro: string  | null;
responsavelCep: string  | null;
responsavelBairro: string  | null;
responsavelNumero: string  | null;
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
