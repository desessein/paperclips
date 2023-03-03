import { DMMF } from '@prisma/generator-helper';
import { IApiProperty, ParsedField } from './types';
export declare function isAnnotatedWithDoc(field: ParsedField): boolean;
export declare function extractAnnotation(field: ParsedField, prop: string): IApiProperty | null;
export declare function parseApiProperty(field: DMMF.Field, include?: {
    default?: boolean;
    doc?: boolean;
    enum?: boolean;
    type?: boolean;
}): IApiProperty[];
export declare function decorateApiProperty(field: ParsedField, annotateAllProps?: boolean): string;
