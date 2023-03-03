
import {ApiProperty} from '@nestjs/swagger'
import {Dependentes} from './dependentes.entity'
import {DocumentoDependenteRG} from './documentoDependenteRG.entity'
import {DocumentoDependenteCNH} from './documentoDependenteCNH.entity'
import {DocumentoDependentePassaporte} from './documentoDependentePassaporte.entity'
import {DocumentoDependenteCTPS} from './documentoDependenteCTPS.entity'
import {DocumentoDependenteCarteiraDeClasse} from './documentoDependenteCarteiraDeClasse.entity'


export class DocumentoDependente {
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
dependente?: Dependentes  | null;
dependenteId: string  | null;
registroGeral?: DocumentoDependenteRG[] ;
carteiraNacionalHabilitacao?: DocumentoDependenteCNH[] ;
documentoPassaporte?: DocumentoDependentePassaporte[] ;
documentoCTPS?: DocumentoDependenteCTPS[] ;
documentoDependenteCarteiraDeClasse?: DocumentoDependenteCarteiraDeClasse[] ;
servidorId: string ;
}
