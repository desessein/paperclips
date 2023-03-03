
import {Poder,Esfera} from '@prisma/client'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateOrgaoDto {
  nome?: string;
abreviatura?: string;
codigoCliente?: string;
cnpj?: string;
@ApiProperty({
  enum: Poder,
})
poder: Poder;
@ApiProperty({
  enum: Esfera,
})
esfera: Esfera;
responsavelNome: string;
responsavelCargo: string;
responsavelEmail?: string;
responsavelTelefone?: string;
responsavelUf?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
responsavelCidade?: number;
responsavelLogradouro?: string;
responsavelCep?: string;
responsavelBairro?: string;
responsavelNumero?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
