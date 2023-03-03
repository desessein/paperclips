
import {ApiProperty} from '@nestjs/swagger'


export class LogLocalidadeDto {
  id: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
LOC_NU: number ;
UFE_SG: string ;
LOC_NO: string ;
CEP: string  | null;
LOC_IN_SIT: string ;
LOC_IN_TIPO_LOC: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
LOC_NU_SUB: number ;
LOC_NO_ABREV: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
MUN_NU: number  | null;
}
