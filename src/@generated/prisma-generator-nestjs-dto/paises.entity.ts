
import {ApiProperty} from '@nestjs/swagger'
import {EnderecoServidor} from './enderecoServidor.entity'


export class Paises {
  id: string ;
NamePT: string ;
NameEN: string ;
NameES: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
NumCode: number ;
Iso: string ;
Iso3: string ;
pais?: EnderecoServidor[] ;
}
