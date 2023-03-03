
import {ApiProperty} from '@nestjs/swagger'




export class UpdateLogBairroDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
BAI_NU?: number;
UFE_SG?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
LOC_NU?: number;
BAI_NO?: string;
BAI_NO_ABREV?: string;
}
