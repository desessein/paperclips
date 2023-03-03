
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateLogLogradouroDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
LOG_NU: number;
UFE_SG: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
LOC_NU: number;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
BAI_NU_INI: number;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
BAI_NU_FIM: number;
LOG_NO: string;
LOG_COMPLEMENTO?: string;
CEP: string;
TLO_TX: string;
LOG_STA_TLO: string;
LOG_NO_ABREV: string;
}
