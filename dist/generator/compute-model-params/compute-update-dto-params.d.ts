import type { DMMF } from '@prisma/generator-helper';
import type { TemplateHelpers } from '../template-helpers';
import type { Model, UpdateDtoParams } from '../types';
interface ComputeUpdateDtoParamsParam {
    model: Model;
    allModels: Model[];
    templateHelpers: TemplateHelpers;
    dmmf: DMMF.Document;
    annotateAllDtoProperties: boolean;
}
export declare const computeUpdateDtoParams: ({ model, allModels, templateHelpers, dmmf, annotateAllDtoProperties, }: ComputeUpdateDtoParamsParam) => UpdateDtoParams;
export {};
