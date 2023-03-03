import { DMMF } from '@prisma/generator-helper';
import { IClassValidator, ParsedField } from './types';
export declare function parseClassValidators(field: DMMF.Field, dmmf: DMMF.Document): IClassValidator[];
export declare function decorateClassValidators(field: ParsedField): string;
