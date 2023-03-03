
import {sexo,MotivoInicioDependencia} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateInstituidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
CPF?: string;
NomeInstituidor?: string;
@ApiProperty({
  enum: sexo,
})
SexoInstituidor?: sexo;
@ApiProperty({
  enum: MotivoInicioDependencia,
})
MotivoInicioDependencia?: MotivoInicioDependencia;
MotivoDependenciaEscrita?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataNascimentoInstituidor?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataFalecimentoInstituidor?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataInicioDependencia?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataFimDependencia?: Date;
salvoTemporariamente?: boolean;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
auditAt?: Date;
userIdAudit?: string;
}
