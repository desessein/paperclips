
import {ApiProperty} from '@nestjs/swagger'
import {Servidor} from './servidor.entity'
import {Instituto} from './instituto.entity'


export class TipoRecadastramento {
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
description: string ;
isActive: boolean ;
servidores?: Servidor[] ;
instituto?: Instituto ;
institutoId: string ;
}
