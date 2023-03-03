
import {ApiProperty} from '@nestjs/swagger'




export class UpdatePaisesDto {
  NamePT?: string;
NameEN?: string;
NameES?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
NumCode?: number;
Iso?: string;
Iso3?: string;
}
