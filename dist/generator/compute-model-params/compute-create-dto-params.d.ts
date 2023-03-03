import type { DMMF } from '@prisma/generator-helper';
import type { TemplateHelpers } from '../template-helpers';
import type { Model, CreateDtoParams } from '../types';
interface ComputeCreateDtoParamsParam {
    model: Model;
    allModels: Model[];
    templateHelpers: TemplateHelpers;
    dmmf: DMMF.Document;
    annotateAllDtoProperties: boolean;
}
export declare const computeCreateDtoParams: ({ model, allModels, templateHelpers, dmmf, annotateAllDtoProperties, }: ComputeCreateDtoParamsParam) => CreateDtoParams;
export {};
