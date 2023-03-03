import { TemplateHelpers } from './template-helpers';
import type { DMMF } from '@prisma/generator-helper';
import { NamingStyle, WriteableFileSpecs } from './types';
interface RunParam {
    output: string;
    dmmf: DMMF.Document;
    exportRelationModifierClasses: boolean;
    outputToNestJsResourceStructure: boolean;
    flatResourceStructure: boolean;
    connectDtoPrefix: string;
    createDtoPrefix: string;
    updateDtoPrefix: string;
    dtoSuffix: string;
    entityPrefix: string;
    entitySuffix: string;
    fileNamingStyle: NamingStyle;
    classValidation: boolean;
    outputType: string;
    noDependencies: boolean;
    explicitGeneration: boolean;
    annotateAllDtoProperties: boolean;
}
declare let theHelper: TemplateHelpers;
export { theHelper };
export declare const run: ({ output, dmmf, ...options }: RunParam) => WriteableFileSpecs[];
